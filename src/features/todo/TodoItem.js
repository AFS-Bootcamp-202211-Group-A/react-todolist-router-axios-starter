import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "./todoSlice";
import "./TodoItem.css";
import { putTodo } from "../../api/todos";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    putTodo({
      ...todo,
      done: !todo.done,
    }).then((response) => dispatch(updateTodo(response.data)));
  };

  const onDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="box" onClick={onToggle}>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
      <span className="times" onClick={onDelete}>
        &times;
      </span>
    </div>
  );
};

export default TodoItem;
