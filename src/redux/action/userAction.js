export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const GOOGLE_LOGIN_REQUEST = "GOOGLE_LOGIN_REQUEST";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const logIn = (signInData) => {
  return {
    type: LOGIN_REQUEST,
    signInData,
  };
};

export const googleLogIn = () => {
  return {
    type: GOOGLE_LOGIN_REQUEST,
  };
};

export const logInSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
};

export const logInFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};

export const signUp = (signUpData) => {
  return {
    type: SIGNUP_REQUEST,
    signUpData,
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

export const signUpFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
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
