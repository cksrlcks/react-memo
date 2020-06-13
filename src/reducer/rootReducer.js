import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import notes from "./noteReducer";
import todos from "./todoReducer";

export const rootReducer = combineReducers({
  notes,
  todos,
  firebase: firebaseReducer,
});
