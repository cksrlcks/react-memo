import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
} from "../action/todoAction";
const initialState = [
  {
    id: 1,
    item: "이상한거 만들기",
    done: false,
  },
  {
    id: 2,
    item: "만들기",
    done: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          item: action.item,
        },
      ];

    default:
      return state;
  }
};

export default todos;
