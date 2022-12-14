import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "./todoSlice";
import { toggleTodos, deleteTodos, updateTodos } from "../../api/todos";
import { Button, Modal, Input} from "antd";
import {EditOutlined, CloseOutlined} from '@ant-design/icons';
import { useState } from "react";

import "./TodoItem.css";

const TodoItem = (props) => {
  const { todo } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[todoText,setText] = useState(props.text);
  const dispatch = useDispatch();

  const success = () => {
    Modal.success({
      content: 'Successfully delete the todo item.',
    });
  };

  const onToggle = () => {
    toggleTodos(todo).then( () => {
      dispatch(toggleTodo(todo.id))
    })
    
  };
  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodos(todo).then( () => {
      dispatch(deleteTodo(todo.id));
      success();
    })
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const updatedTodo = {id:todo.id, text: todoText, done: todo.done}
    updateTodos(updatedTodo).then( () => {
      dispatch(updateTodo(updatedTodo.id))
    })
    setIsModalOpen(false);

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateTextValue = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="box">
      <span className={todo.done ? "done boxText" : "boxText"} onClick={onToggle}>{todo.text}</span>
      <span className="times" onClick={onDelete}>
      <CloseOutlined style={{color: 'hotpink'}}/>
      </span> 
      <span className="times" onClick={showModal}><EditOutlined /></span>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Please type your updated text here" value={todoText} type="text" onChange={updateTextValue} ></Input>
      </Modal>
      </div>
  );
};

export default TodoItem;
