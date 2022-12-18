import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../api/todos";
import TodoGroup from "./TodoGroup";
import { addTodos } from "./todoSlice";

export default function DoneTodo() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos()
      .then((response) => {
        dispatch(addTodos(response.data));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  const dones = useSelector((state) => {
    return state.todoList.filter((todo) => todo.done);
  });
  return (
    <>
      <TodoGroup todos={dones} done={true} />
    </>
  );
}
