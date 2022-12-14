import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postTodo } from "../../api/todos";
import { addTodo } from "./todoSlice";

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
