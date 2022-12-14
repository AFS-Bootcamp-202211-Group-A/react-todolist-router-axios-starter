import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./todoSlice";
import "./TodoItem.css";
import { deleteTodo, putTodo } from "../../api/todos";

const TodoItem = (props) => {
  const { todo, done: isDoneList } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    if (!isDoneList) {
      const newTodo = {
        id: todo.id,
        text: todo.text,
        done: !todo.done,
      };
      putTodo(todo.id, newTodo);
      dispatch(toggleTodo(todo.id));
    }
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodo(todo.id);
    dispatch(removeTodo(todo.id));
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
