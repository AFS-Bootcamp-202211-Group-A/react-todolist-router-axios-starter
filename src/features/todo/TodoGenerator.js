import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { postTodos } from "../../api/todos";
import { Button } from "antd";

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = { text: todoText, done: false };
    //dispatch(addTodo(todo));
    // step2: call api and update state
    // step3: create a reducer
    postTodos(todo).then(response => {dispatch(addTodo(response.data))});
  

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
      <Button type="dashed" size="small" onClick={onAdd}>add </Button>
    </>
  );
};

export default TodoGenerator;
