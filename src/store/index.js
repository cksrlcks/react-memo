import rootReducer from "../reducer/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "../firebase";

// const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
//   createStore
// );

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //applyMiddleware(reduxThunk)
);

export default store;
