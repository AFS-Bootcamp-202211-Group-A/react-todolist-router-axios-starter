import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAPI } from "../../api/todos";
import { addTodo } from "./todoSlice";

import { Button, Input} from 'antd';

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = { text: todoText, done: false };
    addTodoAPI(todo).then((response)=>{
      dispatch(addTodo(response.data))
    })
    setTodoText("");
  };

  return (
    <>
     <Input placeholder="input your todo"
        type="text"
        name="todo"
        value={todoText}
        onChange={onTextChange}
        defaultValue="0571"
        style={{ width: '20%' }}
      />
      
      <Button type="primary" onClick={onAdd}>add</Button>
    </>
  );
};

export default TodoGenerator;
