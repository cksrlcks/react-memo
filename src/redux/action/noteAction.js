export const ADD_NOTE_REQUEST = "ADD_NOTE_REQUEST";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE";

export const RESET_NOTE_REQUEST = "RESET_NOTE";
export const RESET_NOTE_SUCCESS = "RESET_NOTE";

export const add_note = (data) => {
  return {
    type: ADD_NOTE_REQUEST,
    note: data,
  };
};

export const add_note_success = () => {
  return {
    type: ADD_NOTE_SUCCESS,
  };
};

export const add_note_failure = () => {
  return {
    type: ADD_NOTE_FAILURE,
  };
};

export const reset_note = () => {
  return {
    type: RESET_NOTE_REQUEST,
  };
};
export const reset_note_success = () => {
  return {
    type: RESET_NOTE_SUCCESS,
  };
};
