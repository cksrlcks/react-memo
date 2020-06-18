import {
  ADD_NOTE_REQUEST,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  LOAD_NOTES_REQUEST,
  LOAD_NOTES_SUCCESS,
  LOAD_NOTES_FAILURE,
  SYNC_NOTES_REQUEST,
  SYNC_NOTES_SUCCESS,
  SYNC_NOTES_FAILURE,
  VIEW_NOTE,
  SUCCESS_RESET,
} from "../action/noteAction";

const initialState = {
  note_loading: false,
  reset: false,
  notes: "",
  success: false,
  nowKey: "",
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
        success: true,
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        note_loading: false,
      };
    case LOAD_NOTES_REQUEST:
      return {
        ...state,
        note_loading: true,
      };
    case LOAD_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.notes,
        note_loading: false,
      };
    case LOAD_NOTES_FAILURE:
      return {
        ...state,
        note_loading: false,
      };
    case SYNC_NOTES_REQUEST:
      return {
        ...state,
        note_loading: true,
      };
    case SYNC_NOTES_SUCCESS:
      return {
        ...state,
        note_loading: false,
        notes: action.notes,
      };
    case SYNC_NOTES_FAILURE:
      return {
        ...state,
        note_loading: false,
      };
    case SUCCESS_RESET:
      return {
        ...state,
        success: false,
      };
    case VIEW_NOTE:
      return {
        ...state,
        nowKey: action.nowKey,
      };
    default:
      return state;
  }
};

export default notes;
