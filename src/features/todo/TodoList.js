import { useDispatch, useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getTodos } from "../../api/todo";
import { addTodos } from "./todoSlice";

const TodoList = (props) => {
  // get the data from store
  const todos = useSelector((state) => {
    return state.todoList.filter(todoItem => todoItem.done || !props.showDoneItem );
  });

  const dispactch = useDispatch();

  useEffect(() => {
    getTodos().then((response) =>{
        dispactch(addTodos(response.data));
    }); 
  }, [])
  

  let navigate = useNavigate();
  // Somewhere in your code, e.g. inside a handler:
  
  const switchTodoDonePage = () => { 
    props.showDoneItem ? navigate("/") : navigate("/done");
   }

  return (
    <>
      <TodoGroup todos={todos} />
      <TodoGenerator />
      <button onClick={switchTodoDonePage}>Show {(props.showDoneItem ? "todo " : "done ")} items</button>
    </>
  );
};

export default TodoList;
