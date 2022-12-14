import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";
import { putDone } from "../../api/todos";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    const toggledTodo = {...todo, done: !todo.done};
    putDone(todo.id, toggledTodo).then((response) => {
      dispatch(toggleTodo(response.data.id));
      console.log(response.data);
    });    
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
