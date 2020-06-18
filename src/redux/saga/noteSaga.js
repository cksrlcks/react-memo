import firebase from "firebase/app";
import { auth } from "firebase/auth";
import rsf from "../rsf";
import { push } from "connected-react-router";
import {
  ADD_NOTE_REQUEST,
  add_note_success,
  add_note_failure,
  load_notes_success,
  load_notes_failure,
  sync_notes,
  sync_notes_success,
  sync_notes_failure,
  SYNC_NOTES_REQUEST,
  ADD_NOTE_SUCCESS,
} from "../action/noteAction";
import {
  all,
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
  select,
} from "redux-saga/effects";
import { LOGIN_SUCCESS } from "../action/userAction";
const userState = (state) => state.user;
function* addNoteSaga(action) {
  try {
    const note_data = {
      ...action.note,
      date: firebase.database.ServerValue.TIMESTAMP,
    };
    yield call(rsf.database.create, `/notes/${action.note.uid}`, note_data);
    yield put(add_note_success());
    //alert("저장하였습니다.");
  } catch (err) {
    alert(err);
    yield put(add_note_failure());
  }
}

function* loadNotes() {
  const { user } = yield select(userState);

  if (user) {
    const userNotes = yield call(rsf.database.read, `notes/${user.uid}`);
    yield put(load_notes_success(userNotes));
  } else {
    yield put(load_notes_failure());
  }
}

function* syncNotes() {
  const { user } = yield select(userState);

  if (user) {
    const userNotes = yield call(rsf.database.read, `notes/${user.uid}`);
    yield put(sync_notes_success(userNotes));
    //alert("동기화되었습니다.");
  } else {
    yield put(sync_notes_failure());
  }
}

export default function* noteRootSaga() {
  yield all([
    takeLatest(ADD_NOTE_REQUEST, addNoteSaga),
    takeLatest(LOGIN_SUCCESS, loadNotes),
    takeLatest(SYNC_NOTES_REQUEST, syncNotes),
    takeLatest(ADD_NOTE_SUCCESS, syncNotes),
  ]);
}
