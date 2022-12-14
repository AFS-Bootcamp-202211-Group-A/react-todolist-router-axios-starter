import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "./todoSlice";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { apiDeleteTodo, putTodo } from "../../api/todos";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    putTodo({
      ...todo,
      done: !todo.done,
    }).then((response) => dispatch(updateTodo(response.data)));
  };

  const onDelete = (event) => {
    event.stopPropagation();
    apiDeleteTodo(todo.id).then((response) =>
      dispatch(deleteTodo(response.data.id))
    );
  };

  return (
    <div className="box" onClick={onToggle}>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>{" "}
      <Button
        onClick={onDelete}
        size={"small"}
        shape="round"
        icon={<CloseOutlined style={{ fontSize: "10px" }} />}
      />
    </div>
  );
};

export default TodoItem;
