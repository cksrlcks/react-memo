import { ADD_NOTE_REQUEST, ADD_NOTE_SUCCESS, ADD_NOTE_FAILURE, RESET_NOTE_REQUEST, RESET_NOTE_SUCCESS } from "../action/noteAction";

const initialState = {
  note_loading: false,
  reset: false,
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE_REQUEST:
      return {
        ...state,
        note_loading: true,
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        note_loading: false,
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        note_loading: false,
      };
    case RESET_NOTE_REQUEST:
      return {
        ...state,
        reset: true,
      };
    case RESET_NOTE_SUCCESS:
      return {
        ...state,
        reset: false,
      };
    default:
      return state;
  }
};

export default notes;
