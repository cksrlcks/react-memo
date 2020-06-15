import firebase from "firebase/app";
import { auth } from "firebase/auth";
import { push } from "connected-react-router";
import {
  all,
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  GOOGLE_LOGIN_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  SIGNUP_REQUEST,
  logInSuccess,
  logInFailure,
  logOutSuccess,
  logOutFailure,
  signUpSuccess,
  signUpFailure,
} from "../action/userAction";
import rsf from "../rsf";

const authProvider = new firebase.auth.GoogleAuthProvider();

function* logInSaga(action) {
  try {
    const loginData = action.signInData;
    const data = yield call(
      rsf.auth.signInWithEmailAndPassword,
      loginData.email,
      loginData.password
    );
    yield put(push("/"));
  } catch (error) {
    alert("로그인에 실패하였습니다. 다시한번 확인해주세요");
    yield put(logInFailure(error));
  }
}

function* googleLogInSaga() {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider);

    yield put(push("/"));
  } catch (error) {
    yield put(logInFailure(error));
  }
}

function* logOutSaga() {
  try {
    yield call(rsf.auth.signOut);

    yield put(push("/"));
  } catch (error) {
    yield put(logOutFailure(error));
  }
}

function* signUpSaga(action) {
  try {
    const data = action.signUpData;
    const user = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      data.email,
      data.password
    );

    yield put(signUpSuccess());
    alert("회원가입에 성공했습니다.");
    yield put(push("/"));
  } catch (error) {
    yield put(signUpFailure(error));
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
  }
}

export default function* userRootSaga() {
  yield fork(logInStatusWatcher); //동기적 실행 (기다리지 않음)
  yield all([
    takeLatest(GOOGLE_LOGIN_REQUEST, googleLogInSaga),
    takeLatest(LOGIN_REQUEST, logInSaga),
    takeLatest(LOGOUT_REQUEST, logOutSaga),
    takeLatest(SIGNUP_REQUEST, signUpSaga),
  ]);
}
