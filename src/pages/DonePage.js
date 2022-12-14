import React from "react";
import { useSelector } from "react-redux";
import TodoGroup from "../features/todo/TodoGroup";

function DonePage() {
  const todos = useSelector((state) => {
    return state.todoList.filter((item) => item.done == true);
  });
  console.log(todos);
  return todos.map((todo) => {
    return (
      <div className="box" key={todo.id}>
        <span>{todo.text}</span>
      </div>
    );
  });
}

export default DonePage;
