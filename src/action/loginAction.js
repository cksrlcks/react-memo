import firebase from "../firebase";
import "firebase/auth";

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
  auth.signInWithPopup(provider);
};
export const signOut = () => auth.signOut().then(alert("로그아웃 되었습니다."));

export const SIGN_OUT_USER = "LOGOUT";
export const AUTH_USER = "AUTH_USER";
export const AUTH_ERROR = "AUTH_ERROR";

export function signInUser() {
  signInWithGoogle();
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}

export function authUser(info) {
  return {
    type: AUTH_USER,
    userInfo: info,
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}
