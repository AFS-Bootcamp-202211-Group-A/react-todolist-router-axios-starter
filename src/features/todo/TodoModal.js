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
    event.stopPropagation();
    setText(event.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);

    putTodo({
      ...todo,
      text,
    }).then((response) => {
      dispatch(updateTodo(response.data));
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        size={"small"}
        shape="round"
        icon={<EditOutlined style={{ fontSize: "10px" }} />}
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
