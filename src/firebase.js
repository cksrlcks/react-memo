import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmJu1YG2syvXCVRHrcWQUfKm07jVgQyjk",
  authDomain: "react-memo-2444c.firebaseapp.com",
  databaseURL: "https://react-memo-2444c.firebaseio.com",
  projectId: "react-memo-2444c",
  storageBucket: "react-memo-2444c.appspot.com",
  messagingSenderId: "708170098132",
  appId: "1:708170098132:web:152118527ddac9baa2a241",
  measurementId: "G-9Y23TR4761",
};
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
