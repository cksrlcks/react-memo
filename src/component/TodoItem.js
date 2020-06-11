import React from "react";
import styled from "styled-components";

const TodoItem = ({ todo }) => {
  return (
    <TodoItemBlock>
      <p className="content">{todo.item}</p>
    </TodoItemBlock>
  );
};

export default TodoItem;
const TodoItemBlock = styled.div`
  margin-bottom: 1em;
`;
