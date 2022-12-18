import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { addTodosAPI } from "../../api/todo";
import { Button } from "antd";

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = { text: todoText, done: false };
    addTodosAPI(todo).then((response) =>{
      dispatch(addTodo(response.data));
    }); 
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
      <Button onClick={onAdd}>add</Button>
    </>
  );
};

export default TodoGenerator;
