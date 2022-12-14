import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAPI } from "../../api/todos";
import { addTodo } from "./todoSlice";

import { Button, Input, Card, Row, Col, Typography } from 'antd';

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = { text: todoText, done: false };
    addTodoAPI(todo).then((response)=>{
      dispatch(addTodo(response.data))
    })
    setTodoText("");
  };

  return (
    <Card style={{ border: "1px solid black",
                    margin: "auto",
                    marginTop:"20px",
                    width:"75%",
                    backgroundColor:"#282b30" }}>
      <Row>
        <Col span={3} >
          <Row justify={"end"} align={"bottom"} >
            <Typography.Title level={5}  style={{color:"#E1D9D1", marginRight:"10px"}}>
              New To Do:
            </Typography.Title >
          </Row>
        </Col>
        <Col span={17}>
          <Input
            type="text"
            name="todo"
            value={todoText}
            onChange={onTextChange}
            style={{backgroundColor:"#424549",color:"#E1D9D1"
          }}
          />
          </Col>
          <Col span={4}>
          <Button type="primary" onClick={onAdd}>Add</Button>
          </Col>
      </Row>
    </Card>
  );
};

export default TodoGenerator;
