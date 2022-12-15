import React, { useState } from "react";
import { Input, Modal, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { putTodo } from "../../api/todos";
import { useDispatch } from "react-redux";
import { updateTodo } from "./todoSlice";

export default function TodoModal(props) {
  const { todo } = props;
  const [text, setText] = useState(todo.text);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    putTodo({
      ...todo,
      text,
    }).then((response) => {
      dispatch(updateTodo(response.data));
    });
    setIsModalOpen(false);
    setText(todo.text);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setText(todo.text);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        size={"small"}
        shape="round"
        icon={<EditOutlined style={{ fontSize: "10px" }} />}
        ghost
      />
      <Modal
        title="Update Todo"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input type="text" value={text} onChange={handleOnChange} />
      </Modal>
    </>
  );
}
