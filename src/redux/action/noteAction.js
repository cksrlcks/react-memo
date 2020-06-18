export const ADD_NOTE_REQUEST = "ADD_NOTE_REQUEST";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE";

export const LOAD_NOTES_REQUEST = "LOAD_NOTES_REQUEST";
export const LOAD_NOTES_SUCCESS = "LOAD_NOTES_SUCCESS";
export const LOAD_NOTES_FAILURE = "LOAD_NOTES_FAILURE";

export const SYNC_NOTES_REQUEST = "SYNC_NOTES_REQUEST";
export const SYNC_NOTES_SUCCESS = "SYNC_NOTES_SUCCESS";
export const SYNC_NOTES_FAILURE = "SYNC_NOTES_FAILURE";

export const SUCCESS_RESET = "SUCCESS_RESET";

export const VIEW_NOTE = "VIEW_NOTE";
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

export const sync_notes = () => {
  return {
    type: SYNC_NOTES_REQUEST,
  };
};
export const sync_notes_success = (userNotes) => {
  return {
    type: SYNC_NOTES_SUCCESS,
    notes: userNotes,
  };
};

export const sync_notes_failure = () => {
  return {
    type: SYNC_NOTES_FAILURE,
  };
};

export const success_reset = () => {
  return {
    type: SUCCESS_RESET,
  };
};

export const view_note = (itemKey) => {
  return {
    type: VIEW_NOTE,
    nowKey: itemKey,
  };
};
