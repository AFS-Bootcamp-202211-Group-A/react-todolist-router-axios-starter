import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo, updateColorTodo } from "./todoSlice";
import { updateTodoAPI,  deleteTodoAPI, updateTodoContentAPI} from "../../api/todos";
import { useState } from "react";

import { Button, Typography, Card, List, Row, Col, Modal, Input } from 'antd';
import { DeleteOutlined,EditOutlined, BgColorsOutlined } from '@ant-design/icons';
import "./TodoItem.css"

import {TwitterPicker} from 'react-color'


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
  const [color,setColor] = useState(todo.color);
  const [contentMsg, setcontentMsg] = useState(todo.text);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [dummyContentMsg, setDummyContentMsg] = useState(todo.text)

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
      setDummyContentMsg(response.data.text);
    })
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setcontentMsg(dummyContentMsg);
    setIsModalOpen(false);
  };
  const onTextChange = (event) => {
    setcontentMsg(event.target.value);
  };

  const [isModal2Open, setIsModal2Open] = useState(false);
  const showModal2 = () => {
    setIsModal2Open(true);
  };

  const handleSubmit2 = () => {
    updateTodoContentAPI(
      {
        "id":todo.id,
        "color": color,
      }
    ).then((response)=>{
      dispatch(updateColorTodo(response.data))
    })
    setIsModal2Open(false);
  };

  const handleCancel2 = () => {
    setIsModal2Open(false);
  };
  const onColorChange = (color,event) => {
    setColor(color.hex);
  };

  return (
    <List.Item >
      
        <Card style={{  border: "1px solid black",
                        margin: "auto",
                        marginBottom:"5px",
                        width:"90%",
                        backgroundColor: todo.color
                         }}>

          <Row>
            <Col span={21}>
              <Row justify={"start"}>
                <Text onClick={onToggle} style={{ maxWidth: '100%' }} delete={todo.done ? true : false} >
                  {todo.text}
                </Text>
              </Row>
            </Col>

            <Col span={1}>
              <Button type="dashed" 
                shape="circle" 
                icon={<BgColorsOutlined />} 
                size={"small"}
                onClick={showModal2}
                style={{justifyContent: 'flex-end'}}
              />
            </Col>      

            <Col span={1}>
              <Button type="primary" 
                shape="circle" 
                icon={<EditOutlined />} 
                size={"small"}
                onClick={showModal}
                style={{justifyContent: 'flex-end'}}
              />
            </Col>

            <Col span={1}>
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

        <Modal title="Edit your todo color" 
        open={isModal2Open}
         onOk={handleSubmit2} 
         onCancel={handleCancel2}
         wrapClassName={'modalcolor'}>
          
          <TwitterPicker color={color} onChangeComplete={onColorChange}></TwitterPicker>
          
        </Modal>
       
                         
    </List.Item>
  );
};

export default TodoItem;
