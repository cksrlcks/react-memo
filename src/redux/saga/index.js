import { all, fork } from "redux-saga/effects";
import userRootSaga from "./userSaga";
import noteRootSaga from "./noteSaga";

export default function* rootSaga() {
  yield all([fork(userRootSaga), fork(noteRootSaga)]);
}
