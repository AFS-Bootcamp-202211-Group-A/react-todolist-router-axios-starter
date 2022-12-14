import {
  EditOutlined,
  CloseOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import { Card } from "antd";

import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./todoSlice";
import "./TodoItem.css";
import { deleteTodo, putTodo } from "../../api/todos";

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
    event.stopPropagation();
    deleteTodo(todo.id);
    dispatch(removeTodo(todo.id));
  };

  return (
    // <div className="box" onClick={onToggle}>
    //   <span className={todo.done ? "done" : ""}>{todo.text}</span>
    //   {!isDoneList && (
    //     <span className="times" onClick={onDelete}>
    //       &times;
    //     </span>
    //   )}
    // </div>
    <Card
      className="box"
      style={{ width: 300 }}
      actions={[
        <CheckSquareOutlined key="done" onClick={onToggle} />,
        <EditOutlined key="edit" />,
        <CloseOutlined key="delete" onClick={onDelete} />,
      ]}
    >
      <Meta className={todo.done ? "done" : ""} title={todo.text} />
    </Card>
  );
};

export default TodoItem;
