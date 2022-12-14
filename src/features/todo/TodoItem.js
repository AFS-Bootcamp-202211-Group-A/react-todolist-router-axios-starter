import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";
import { updateTodoAPI, deleteTodoAPI } from "../../api/todo";
import { Button } from 'antd';


const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    var todoObj = {...todo, done: !todo.done};
    updateTodoAPI(todo.id, todoObj).then((response) =>{
      dispatch(toggleTodo(response.data.id));
    });
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodoAPI(todo.id).then((response) =>{
      dispatch(deleteTodo(response.data.id));
    });
    
    // dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="box" onClick={onToggle}>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
      <Button type="primary" danger onClick={onDelete}>
        x
      </Button>
    </div>
  );
};

export default TodoItem;
