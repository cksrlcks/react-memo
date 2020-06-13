import { SET_TOTAL } from "../action/noteAction";

const initialState = {
  total: "",
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    default:
      return state;
  }
};

export default notes;
