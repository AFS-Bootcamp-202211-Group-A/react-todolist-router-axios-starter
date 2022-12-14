import React from 'react'
import { useSelector } from "react-redux";

export default function DoneList() {
    const todos = useSelector((state) => {
        return state.todoList;
      });

     const ListItems = ()=>{
        return todos.filter((todo) => todo.done === true)
            .map((todo)=>{
            return <div>
                    <span>{todo.text}</span>
                    </div>;
        })
    }
    
      return <div>
                <h2> Done List </h2>
                <ListItems/>
            </div>;
      
}


