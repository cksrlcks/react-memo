import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useSelector((state) => state.todos, []);
  return (
    <div className="inner">
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default Todos;
