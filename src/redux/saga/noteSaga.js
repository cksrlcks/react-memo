import rsf from "../rsf";
import { push } from "connected-react-router";
import {
  ADD_NOTE_REQUEST,
  add_note_success,
  add_note_failure,
  LOAD_NOTES_REQUEST,
  load_notes_success,
  load_notes_failure,
  ADD_NOTE_SUCCESS,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  delete_note_success,
  delete_note_failure,
  SET_KEY_REQUEST,
  set_key,
  set_key_success,
  set_key_failure,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  update_note_success,
  update_note_failure,
} from "../action/noteAction";
import { LOGIN_SUCCESS } from "../action/userAction";
import { all, call, fork, put, take, takeEvery, takeLatest, select } from "redux-saga/effects";
const userState = (state) => state.user;

function* addNoteSaga(action) {
  try {
    yield call(rsf.database.create, `/notes/${action.note.uid}`, action.note);
    yield put(add_note_success());
  } catch (err) {
    alert(err);
    yield put(add_note_failure());
  }
}

function* loadNotes() {
  const { user } = yield select(userState);
  try {
    if (user) {
      const userNotes = yield call(rsf.database.read, `notes/${user.uid}`);

      yield put(load_notes_success(userNotes));
      if (userNotes) {
        const itemLength = Object.keys(userNotes).length;
        let viewKey;
        if (itemLength > 0) {
          viewKey = Object.keys(userNotes)[itemLength - 1];
        } else {
          viewKey = "";
        }
        yield put(set_key(viewKey));
      }
    }
  } catch (err) {
    yield put(load_notes_failure());
  }
}

function* deleteNote(action) {
  const { user } = yield select(userState);
  try {
    if (user) {
      yield call(rsf.database.delete, `notes/${user.uid}/${action.targetKey}`);
      yield put(delete_note_success());
      alert("삭제되었습니다.");
    }
  } catch (err) {
    alert(err);
    yield put(delete_note_failure());
  }
}

function* updateNote(action) {
  const { user } = yield select(userState);
  try {
    if (user) {
      yield call(rsf.database.patch, `notes/${user.uid}/${action.targetKey}`, action.note);
      //yield put(set_key(action.targetKey));
      const userNotes = yield call(rsf.database.read, `notes/${user.uid}`);
      yield put(load_notes_success(userNotes));
      yield put(update_note_success());
    }
  } catch (err) {
    //alert(err);
    yield put(update_note_failure());
  }
}

function* setKey(action) {
  try {
    yield put(set_key_success(action.nowKey));
  } catch (err) {
    yield put(set_key_failure());
  }
}

export default function* noteRootSaga() {
  yield all([
    takeLatest(ADD_NOTE_REQUEST, addNoteSaga),

    takeLatest(
      [LOGIN_SUCCESS, ADD_NOTE_SUCCESS, LOAD_NOTES_REQUEST, DELETE_NOTE_SUCCESS],
      loadNotes
    ),

    takeLatest(DELETE_NOTE_REQUEST, deleteNote),

    takeLatest(UPDATE_NOTE_REQUEST, updateNote),

    takeLatest(SET_KEY_REQUEST, setKey),
  ]);
}
