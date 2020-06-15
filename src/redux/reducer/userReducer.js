import {
  LOGIN_REQUEST,
  GOOGLE_LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "../action/userAction";

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case GOOGLE_LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.user,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      return initialState;
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        signUpData: action.signUpData,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.user,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
