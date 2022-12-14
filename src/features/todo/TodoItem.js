import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "./todoSlice";
import { updateTodoAPI,  deleteTodoAPI, updateTodoContentAPI} from "../../api/todos";
import { useState } from "react";

import { Button, Typography, Card, List, Row, Col, Modal, Input } from 'antd';
import { DeleteOutlined,EditOutlined } from '@ant-design/icons';
import "./TodoItem.css"

const TodoItem = (props) => {
  const { todo } = props;
  const { Text } = Typography;
  const dispatch = useDispatch();

  const onToggle = () => {
      updateTodoAPI(todo).then((response)=>{
      dispatch(toggleTodo(response.data.id));
    })
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodoAPI(todo.id).then(()=>{
      dispatch(deleteTodo(todo.id));
    })
  };
  
  const [contentMsg, setcontentMsg] = useState(todo.text);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    updateTodoContentAPI(
      {
        "id":todo.id,
        "text": contentMsg,
      }
    ).then((response)=>{
      dispatch(updateTodo(response.data))
    })
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onTextChange = (event) => {
    setcontentMsg(event.target.value);
  };

  return (
    <List.Item >
      
        <Card style={{  border: "1px solid black",
                        margin: "auto",
                        marginBottom:"5px",
                        width:"90%",
                         }}>

          <Row>
            <Col span={20}>
              <Row justify={"start"}>
                <Text onClick={onToggle} style={{ maxWidth: '100%' }} delete={todo.done ? true : false} >
                  {todo.text}
                </Text>
              </Row>
            </Col>
                         
            <Col span={2}>
              <Button type="primary" 
                shape="circle" 
                icon={<EditOutlined />} 
                size={"small"}
                onClick={showModal}
                style={{justifyContent: 'flex-end'}}
              />
            </Col>

            <Col span={2}>
              <Button  
                shape="circle" 
                icon={<DeleteOutlined />} 
                size={"small"}
                onClick={onDelete}
                style={{justifyContent: 'flex-end', color:"#FF0000"}}
              />
            </Col>
            
          </Row>
        </Card>
        <Modal title="Edit your todo content" 
        open={isModalOpen}
         onOk={handleSubmit} 
         onCancel={handleCancel}
         wrapClassName={'modalcolor'}>
          <Input
            type="text"
            name="todo"
            value={contentMsg}
            onChange={onTextChange}
            style={{backgroundColor:"#424549",color:"#E1D9D1"
          }}
          />
        </Modal>
                         
    </List.Item>
  );
};

export default TodoItem;
