import { useDispatch, useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getTodosAPI } from "../../api/todo";
import { addTodos } from "./todoSlice";

const TodoList = (props) => {
  // get the data from store
  const todos = useSelector((state) => {
    return state.todoList.filter(todoItem => todoItem.done || !props.showDoneItem );
  });

  const dispactch = useDispatch();

  useEffect(() => {
    getTodosAPI().then((response) =>{
        dispactch(addTodos(response.data));
    }); 
  }, [])
  

  let navigate = useNavigate();  

  return (
    <>
      <TodoGenerator />
      <TodoGroup todos={todos} />
    </>
  );
};

export default TodoList;
