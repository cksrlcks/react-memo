import { combineReducers } from "redux";
import notes from "./noteReducer";
import todos from "./todoReducer";
import login from "./loginReducer";

const rootReducer = combineReducers({
  login,
  notes,
  todos,
});

export default rootReducer;
