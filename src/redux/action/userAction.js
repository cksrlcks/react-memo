export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const logIn = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const logInSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

export const logInFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logOutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logOutFailure = (error) => {
  return {
    type: LOGOUT_FAILURE,
    error,
  };
};
