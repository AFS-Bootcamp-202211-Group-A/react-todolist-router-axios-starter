import React from "react";
import { useSelector } from "react-redux";
import TodoGroup from "../todo/TodoGroup";

export default function DoneList() {
  const dones = useSelector((state) => {
    return state.todoList.filter((todo) => todo.done);
  });
  return (
    <>
      <TodoGroup todos={dones} done={true} />
    </>
  );
}
