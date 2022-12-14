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

  const hiddenActions = [
    <CheckSquareOutlined key="done" onClick={onToggle} />,
    <EditOutlined key="edit" />,
  ];
  const persistActions = [<CloseOutlined key="delete" onClick={onDelete} />];
  const cardActions = isDoneList
    ? persistActions
    : [...hiddenActions, persistActions];

  return (
    <Card className="box" style={{ width: 300 }} actions={cardActions}>
      <Meta className={todo.done ? "done" : ""} title={todo.text} />
    </Card>
  );
};

export default TodoItem;
