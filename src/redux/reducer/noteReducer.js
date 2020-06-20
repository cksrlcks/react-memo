import {
  ADD_NOTE_REQUEST,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  LOAD_NOTES_REQUEST,
  LOAD_NOTES_SUCCESS,
  LOAD_NOTES_FAILURE,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILURE,
  SET_KEY_REQUEST,
  SET_KEY_SUCCESS,
  SET_KEY_FAILURE,
  SUCCESS_RESET,
} from "../action/noteAction";

const initialState = {
  note_loading: false,
  notes: "",
  nowKey: "",
  success: false,
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
    case SET_KEY_REQUEST:
      return {
        ...state,
        note_loading: true,
      };
    case SET_KEY_SUCCESS:
      return {
        ...state,
        nowKey: action.nowKey,
        note_loading: false,
      };
    case SET_KEY_FAILURE:
      return {
        ...state,
        note_loading: false,
      };
    case DELETE_NOTE_REQUEST:
      return {
        ...state,
        note_loading: true,
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        note_loading: false,
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        note_loading: false,
      };
    case UPDATE_NOTE_REQUEST:
      return {
        ...state,
        note_loading: true,
      };
    case UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        note_loading: false,
      };
    case UPDATE_NOTE_FAILURE:
      return {
        ...state,
        note_loading: false,
      };
    case SUCCESS_RESET:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export default notes;
