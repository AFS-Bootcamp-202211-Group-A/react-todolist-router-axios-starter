import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, putTodo } from "./todoSlice";
import "./TodoItem.css";
import { putDone, deleteTodoAPI, putText } from "../../api/todos";
import { Button, Space, Modal, Input } from "antd";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    const toggledTodo = { ...todo, done: !todo.done };
    putDone(todo.id, toggledTodo).then((response) => {
      dispatch(toggleTodo(response.data.id));
      console.log(response.data);
    });
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodoAPI(todo.id).then((response) => {
      dispatch(deleteTodo(response.data.id));
      console.log(response.data);
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    const changedTodo = { ...todo, text: message };
    putText(todo.id, changedTodo).then((response) => {
      dispatch(putTodo(response.data));
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="box">
      <Space align="center">
        <span onClick={onToggle} className={todo.done ? "done" : ""}>
          {todo.text}
        </span>
        <div>
          <Button icon={<DeleteOutlined />} onClick={onDelete} />
          <Button icon={<FormOutlined />} onClick={showModal} />
          <Modal
            destroyOnClose={true}
            title="Edit text"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Input
              allowClear
              placeholder="Edit content"
              onChange={handleChange}
            />
          </Modal>
        </div>
      </Space>
    </div>
  );
};

export default TodoItem;
