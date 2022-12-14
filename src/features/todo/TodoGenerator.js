import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "../../api/todos";
import { addTodo } from "./todoSlice";
import { Input } from "antd";

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = { text: todoText, done: false };
    postTodo(todo)
      .then((response) => {
        dispatch(addTodo(response.data));
      })
      .catch((error) => console.log(error));
    setTodoText("");
  };

  return (
    <>
      <Input.Group compact style={{ width: "100%", paddingTop: "15px" }}>
        <Input
          style={{
            width: "calc(100% - 200px)",
          }}
          placeholder="input your todo"
          type="text"
          name="todo"
          value={todoText}
          onChange={onTextChange}
          showCount
          maxLength={60}
        />
        <Button type="primary" onClick={onAdd} icon={<PlusOutlined />}>
          Add
        </Button>
      </Input.Group>
    </>
  );
};

export default TodoGenerator;
