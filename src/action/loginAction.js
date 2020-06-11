export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const login_sucess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};
export const login_failure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
