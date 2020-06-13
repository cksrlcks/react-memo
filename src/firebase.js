import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

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

// react-redux-firebase config
export const rrfConfig = {
  userProfile: "users",
  //useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
//firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

export const database = firebase.database();

export default firebase;
