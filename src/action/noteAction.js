export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

export const add_note = () => {
  return {
    type: ADD_NOTE,
  };
};
export const remove_note = () => {
  return {
    type: REMOVE_NOTE,
  };
};
