import firebase from "firebase/app";
import { auth } from "firebase/auth";
import rsf, { db, firebaseApp } from "../rsf";
import { push } from "connected-react-router";
import {
  ADD_NOTE_REQUEST,
  add_note_success,
  add_note_failure,
  load_notes_success,
  load_notes_failure,
  sync_notes_success,
  sync_notes_failure,
  SYNC_NOTES_REQUEST,
  ADD_NOTE_SUCCESS,
  view_note,
  LOAD_NOTES_SUCCESS,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  delete_note_success,
  delete_note_failure,
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
const notesState = (state) => state.notes;
function* addNoteSaga(action) {
  try {
    const timestamp = firebase.database.ServerValue.TIMESTAMP;
    const createDate = new Date();
    const note_data = {
      ...action.note,
      date: createDate.getTime(),
      rdate: -1 * createDate.getTime(),
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
    //console.log(userNotes);
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
function* setFirstKey() {
  const { notes } = yield select(notesState);
  const item_length = Object.keys(notes).length;
  let firstKey;

  if (item_length > 0) {
    firstKey = Object.keys(notes)[item_length - 1];
  } else {
    firstKey = "";
  }

  yield put(view_note(firstKey));
}

function* deleteNote(action) {
  const { user } = yield select(userState);
  try {
    if (user) {
      yield call(rsf.database.delete, `notes/${user.uid}/${action.targetKey}`);
      yield put(delete_note_success());
      yield call(alert("삭제되었습니다."));
    }
  } catch (err) {
    alert(err);
    yield put(delete_note_failure());
  }
}

export default function* noteRootSaga() {
  yield all([
    takeLatest(ADD_NOTE_REQUEST, addNoteSaga),
    takeLatest(LOGIN_SUCCESS, loadNotes),
    takeLatest(SYNC_NOTES_REQUEST, syncNotes),
    takeLatest(ADD_NOTE_SUCCESS, syncNotes),
    takeLatest(LOAD_NOTES_SUCCESS, setFirstKey),
    takeLatest(DELETE_NOTE_REQUEST, deleteNote),
    takeLatest(DELETE_NOTE_SUCCESS, syncNotes),
  ]);
}
