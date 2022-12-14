import {
  EditOutlined,
  CloseOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import { Card, Input, Modal } from "antd";

import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./todoSlice";
import "./TodoItem.css";
import { deleteTodo, putTodo } from "../../api/todos";
import { useState } from "react";

const { Meta } = Card;
const TodoItem = (props) => {
  const { todo, done: isDoneList } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    if (!isDoneList) {
      const newTodo = {
        id: todo.id,
        text: todo.text,
        done: !todo.done,
      };
      putTodo(todo.id, newTodo);
      dispatch(toggleTodo(todo.id));
    }
  };

  const onDelete = (event) => {
    deleteTodo(todo.id);
    dispatch(removeTodo(todo.id));
  };

  const onEdit = (event) => {
    setIsModalOpen(true);
  };

  const hiddenActions = [
    <CheckSquareOutlined key="done" onClick={onToggle} />,
    <EditOutlined key="edit" onClick={onEdit} />,
  ];
  const persistActions = [<CloseOutlined key="delete" onClick={onDelete} />];
  const cardActions = isDoneList
    ? persistActions
    : [...hiddenActions, persistActions];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoText, setTodoText] = useState(todo.text);
  const handleOk = () => {
    // update by api
    const newTodo = {
      id: todo.id,
      text: todoText,
      done: todo.done,
    };
    putTodo(todo.id, newTodo);
    // update store

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setTodoText(todo.text);
    setIsModalOpen(false);
  };
  const onTodoTextChange = (event) => {
    setTodoText(event.target.value);
  };
  return (
    <Card className="box" style={{ width: 300 }} actions={cardActions}>
      <Meta className={todo.done ? "done" : ""} title={todo.text} />
      <Modal
        title="Edit todo"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          showCount
          maxLength={60}
          onChange={onTodoTextChange}
          value={todoText}
        />
      </Modal>
    </Card>
  );
};

export default TodoItem;
