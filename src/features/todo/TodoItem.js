import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";
import { updateTodos,  deleteTodos} from "../../api/todos";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
      updateTodos(todo).then((response)=>{
      dispatch(toggleTodo(todo.id));
    })
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodos(todo.id).then((response)=>{
      dispatch(deleteTodo(todo.id));
    })
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
