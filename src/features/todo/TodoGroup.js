import TodoItem from "./TodoItem";
import { List } from "antd";
import "./TodoGroup.css"

const TodoGroup = (props) => {
  return (
    <List
      className="list"
      bordered
      dataSource={props.todos}
      renderItem={(todo) => (
        <List.Item>
          <TodoItem todo={todo} key={todo.id} />
        </List.Item>
      )}
    />
  );
};

export default TodoGroup;
