export const ADD_NOTE_REQUEST = "ADD_NOTE_REQUEST";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE";

export const LOAD_NOTES_REQUEST = "LOAD_NOTES_REQUEST";
export const LOAD_NOTES_SUCCESS = "LOAD_NOTES_SUCCESS";
export const LOAD_NOTES_FAILURE = "LOAD_NOTES_FAILURE";

export const DELETE_NOTE_REQUEST = "DELETE_NOTE_REQUEST";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";

export const SET_KEY_REQUEST = "SET_KEY_REQUEST";
export const SET_KEY_SUCCESS = "SET_KEY_SUCCESS";
export const SET_KEY_FAILURE = "SET_KEY_FAILURE";

export const UPDATE_NOTE_REQUEST = "UPDATE_NOTE_REQUEST";
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";
export const UPDATE_NOTE_FAILURE = "UPDATE_NOTE_FAILURE";

export const SUCCESS_RESET = "SUCCESS_RESET";

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

export const load_notes = () => {
  return {
    type: LOAD_NOTES_REQUEST,
  };
};

export const load_notes_success = (userNotes) => {
  return {
    type: LOAD_NOTES_SUCCESS,
    notes: userNotes,
  };
};
export const load_notes_failure = () => {
  return {
    type: LOAD_NOTES_FAILURE,
  };
};

export const set_key = (itemKey) => {
  return {
    type: SET_KEY_REQUEST,
    nowKey: itemKey,
  };
};

export const set_key_success = (itemKey) => {
  return {
    type: SET_KEY_SUCCESS,
    nowKey: itemKey,
  };
};
export const set_key_failure = () => {
  return {
    type: SET_KEY_FAILURE,
  };
};

export const delete_note = (itemKey) => {
  return {
    type: DELETE_NOTE_REQUEST,
    targetKey: itemKey,
  };
};

export const delete_note_success = () => {
  return {
    type: DELETE_NOTE_SUCCESS,
  };
};
export const delete_note_failure = () => {
  return {
    type: DELETE_NOTE_FAILURE,
  };
};

export const update_note = (update_data, itemKey) => {
  return {
    type: UPDATE_NOTE_REQUEST,
    note: update_data,
    targetKey: itemKey,
  };
};

export const update_note_success = () => {
  return {
    type: UPDATE_NOTE_SUCCESS,
  };
};
export const update_note_failure = () => {
  return {
    type: UPDATE_NOTE_FAILURE,
  };
};

export const success_reset = () => {
  return {
    type: SUCCESS_RESET,
  };
};
