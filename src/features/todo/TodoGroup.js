import TodoItem from "./TodoItem";
import "./TodoGroup.css";
const TodoGroup = (props) => {
  const todoItems = props.todos.map((todo) => {
    return <TodoItem todo={todo} key={todo.id} done={props.done} />;
  });
  return <div className="todoGroup">{todoItems}</div>;
};

export default TodoGroup;
