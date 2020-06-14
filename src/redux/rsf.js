//redux-saga-firebase : rsf.js
import firebase from "firebase/app";
//import "firebase/firestore";
import "firebase/database";
import ReduxSagaFirebase from "redux-saga-firebase";

const fbConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
};

const firebaseApp = firebase.initializeApp(fbConfig);
const rsf = new ReduxSagaFirebase(firebaseApp);

//firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

export const database = firebase.database();

export default rsf;
