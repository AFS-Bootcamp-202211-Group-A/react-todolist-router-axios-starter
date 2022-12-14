import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodos } from "../../api/todos";
import { addTodo} from "./todoSlice";

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = { text: todoText, done: false };
    //step 2: scall api update state
    postTodos(todo).then((response) => {
      console.log(response.data);
      dispatch(addTodo(response.data));
    });
    //step 3: create reducer
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
      <button onClick={onAdd}>add</button>
    </>
  );
};

export default TodoGenerator;
