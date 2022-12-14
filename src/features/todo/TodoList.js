import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { getTodos } from "../../api/todos";
import { addTodos } from "./todoSlice";

const TodoList = () => {
  // get the data from store
  const todos = useSelector((state) => {
    return state.todoList;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos().then((response) => {
    console.log(response);
    dispatch(addTodos(response.data));
    });
  }, [dispatch]);

  return (
    <>
      <TodoGroup todos={todos} />
      <TodoGenerator />
    </>
  );
};

export default TodoList;
