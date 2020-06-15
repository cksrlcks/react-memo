import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./userReducer";
import notes from "./noteReducer";
import todos from "./todoReducer";

const rootReudcer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user,
    notes,
    todos,
  });

export default rootReudcer;
