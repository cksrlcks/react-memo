import firebase from "firebase/app";
import { auth } from "firebase/auth";
import rsf from "../rsf";
import { push } from "connected-react-router";
import { ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, ADD_NOTE_FAILURE, add_note, add_note_success, add_note_failure, reset_note, reset_note_success } from "../action/noteAction";
import { all, call, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";

function* addNoteSaga(action) {
  try {
    //console.log(action.note);
    const note_data = { ...action.note, date: firebase.database.ServerValue.TIMESTAMP };
    yield call(rsf.database.create, `/notes/${action.note.uid}`, note_data);
    yield put(add_note_success());
    alert("저장하였습니다.");
    yield put(reset_note());
  } catch (err) {
    alert("실패했습니다.");
    console.log(err);
    yield put(add_note_failure());
  }
}

export default function* noteRootSaga() {
  yield all([takeLatest(ADD_NOTE_REQUEST, addNoteSaga)]);
}
