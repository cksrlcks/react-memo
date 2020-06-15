import firebase from "firebase/app";
import { auth } from "firebase/auth";
import { push } from "connected-react-router";
import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  logInSuccess,
  logInFailure,
  logOutSuccess,
  logOutFailure,
} from "../action/userAction";
import rsf from "../rsf";

const authProvider = new firebase.auth.GoogleAuthProvider();

function* logInSaga() {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider);
  } catch (error) {
    yield put(logInFailure(error));
  }
}

function* logOutSaga() {
  try {
    yield call(rsf.auth.signOut);
  } catch (error) {
    yield put(logOutFailure(error));
  }
}

function* logInStatusWatcher() {
  const channel = yield call(rsf.auth.channel);
  //channel 액션이 들어올때마다 계속 동작하게하는 while true문
  while (true) {
    const { user } = yield take(channel);
    if (user) {
      yield put(logInSuccess(user));
    } else {
      yield put(logOutSuccess());
    }
    yield put(push("/"));
  }
}

export default function* userRootSaga() {
  yield fork(logInStatusWatcher); //동기적 실행 (기다리지 않음)
  yield all([
    takeEvery(LOGIN_REQUEST, logInSaga),
    takeEvery(LOGOUT_REQUEST, logOutSaga),
  ]);
}
