import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../action/loginAction";
const initialState = { logIn: false };
const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        logIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        logIn: false,
      };
    default:
      return state;
  }
};

export default login;
