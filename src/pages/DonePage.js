import React from "react";
import { useSelector } from "react-redux";

function DonePage() {
  const todos = useSelector((state) => {
    return state.todoList.filter((item) => item.done === true);
  });
  console.log(todos);
  return todos.map((todo) => {
    return (
      <div>
        <p>Done Page</p>
        <div className="box" key={todo.id}>
          <span>{todo.text}</span>
        </div>
      </div>
    );
  });
}

export default DonePage;
