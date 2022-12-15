import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postTodo } from "../../api/todos";
import { addTodo } from "./todoSlice";
import { Button, Input } from "antd";
import './TodoGenerator.css'

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const nextId = useSelector(
    (state) => Math.max(state.todoList.map(({ id }) => Number(id))) + 1 || 1
  );

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    postTodo({
      id: nextId.toString(),
      text: todoText,
      done: false,
    }).then((response) => dispatch(addTodo(response.data)));
    setTodoText("");
  };

  return (
    <>
      <Input
        className="textInput"
        placeholder="input your todo"
        type="text"
        name="todo"
        value={todoText}
        onChange={onTextChange}
      />
      <Button onClick={onAdd}>add</Button>
    </>
  );
};

export default TodoGenerator;
