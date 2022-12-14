import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "./todoSlice";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Row, Col } from "antd";
import { apiDeleteTodo, putTodo } from "../../api/todos";
import "./TodoItem.css";
import TodoModal from "./TodoModal";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = (event) => {
    event.stopPropagation();
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
    <div className="box">
      <Row justify="end">
        <Col flex="auto">
          <span onClick={onToggle} className={todo.done ? "done" : ""}>
            {todo.text}
          </span>
        </Col>
        <Col>
          <Button
            onClick={onDelete}
            size={"small"}
            shape="round"
            icon={<CloseOutlined style={{ fontSize: "10px" }} />}
          />{" "}
          <TodoModal todo={todo} />
        </Col>
      </Row>
    </div>
  );
};

export default TodoItem;
