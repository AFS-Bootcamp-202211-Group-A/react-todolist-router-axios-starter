import { Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "../../api/todos";
import { addTodo } from "./todoSlice";

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = { text: todoText, done: false };
    postTodo(todo)
      .then((response) => {
        dispatch(addTodo(response.data));
      })
      .catch((error) => console.log(error));
    setTodoText("");
  };

  return (
    <>
      <input
        placeholder="input your todo"
        type="text"
        name="todo"
        value={todoText}
        onChange={onTextChange}
      />
      <Button type="dashed" onClick={onAdd}>
        add
      </Button>
    </>
  );
};

export default TodoGenerator;
