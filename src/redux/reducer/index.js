import { combineReducers } from "redux";
import user from "./userReducer";
import notes from "./noteReducer";
import todos from "./todoReducer";

const rootReudcer = combineReducers({
  user,
  notes,
  todos,
});

export default rootReudcer;
