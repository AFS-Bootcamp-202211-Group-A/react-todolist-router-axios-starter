import React from 'react';
import { useSelector } from "react-redux";
import DoneItem from '../features/todo/DoneItem';




export default function DoneListPage () {
    const todos = useSelector((state) => state.todoList);
    return todos.filter(todo => todo.done).map((todoDone, index) => {
        console.log(todoDone);
      return <DoneItem todoDone={todoDone} key={index} />;
    });
  };
  
