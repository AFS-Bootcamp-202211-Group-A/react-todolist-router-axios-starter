import { useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  // get the data from store
  const todos = useSelector((state) => {
    return state.todoList;
  });
  const navigate = useNavigate();
  const toDonePage = () => {
    navigate('/done');
  }

  return (
    <>
    <button onClick={toDonePage}>To Done Page</button>
      <TodoGroup todos={todos} />
      <TodoGenerator />
    </>
  );
};

export default TodoList;
