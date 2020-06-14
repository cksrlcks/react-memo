import { all, fork } from "redux-saga/effects";
import userRootSaga from "./userSaga";

export default function* rootSaga() {
  yield all([fork(userRootSaga)]);
}
