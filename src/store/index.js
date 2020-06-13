import { rootReducer } from "../reducer/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import firebase, { rrfConfig } from "../firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const initialState = {};
export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};
