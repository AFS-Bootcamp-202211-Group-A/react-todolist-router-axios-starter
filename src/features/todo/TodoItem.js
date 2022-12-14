import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { todo, done: isDoneList } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    if (!isDoneList) {
      dispatch(toggleTodo(todo.id));
    }
  };

  const onDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="box" onClick={onToggle}>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
      {!isDoneList && (
        <span className="times" onClick={onDelete}>
          &times;
        </span>
      )}
    </div>
  );
};

export default TodoItem;
