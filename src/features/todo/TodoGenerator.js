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
      <Input.Group compact>
        <Input
          style={{
            width: "calc(100% - 200px)",
          }}
          defaultValue="https://ant.design"
          placeholder="input your todo"
          type="text"
          name="todo"
          value={todoText}
          onChange={onTextChange}
        />
        <Button type="primary">Submit</Button>
      </Input.Group>
    </>
  );
};

export default TodoGenerator;
