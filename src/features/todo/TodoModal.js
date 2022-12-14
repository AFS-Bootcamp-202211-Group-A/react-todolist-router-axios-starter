import React, { useState } from "react";
import { Input, Modal, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

export default function TodoModal(props) {
  const { todo } = props;
  const [text, setText] = useState(todo.text);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnChange = (event) => {
    event.stopPropagation();
    setText(event.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
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
