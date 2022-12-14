import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import { toggleTodos, deleteTodos } from "../../api/todos";

import "./TodoItem.css";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {

    toggleTodos(todo).then( () => {
      dispatch(toggleTodo(todo.id))
    })
    
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodos(todo).then( () => {
      dispatch(deleteTodo(todo.id))
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
