export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const add_todo = () => {
  return {
    type: ADD_TODO,
  };
};
export const remove_todo = () => {
  return {
    type: REMOVE_TODO,
  };
};
