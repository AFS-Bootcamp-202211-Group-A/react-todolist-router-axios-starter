import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import { updateTodoAPI,  deleteTodoAPI} from "../../api/todos";

import { Button, Typography, Card, List, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const TodoItem = (props) => {
  const { todo } = props;
  const { Text } = Typography;
  const dispatch = useDispatch();

  const onToggle = () => {
      updateTodoAPI(todo).then((response)=>{
      dispatch(toggleTodo(todo.id));
    })
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodoAPI(todo.id).then((response)=>{
      dispatch(deleteTodo(todo.id));
    })
  };

  

  return (
    <List.Item onClick={onToggle}>
      
        <Card style={{  border: "1px solid black",
                        margin: "auto",
                        marginBottom:"5px",
                        width:"90%",
                         }}>

          <Row>
            <Col span={20}>
              <Row justify={"start"}>
                <Text style={{ maxWidth: '100%' }} delete={todo.done ? true : false} >
                  {todo.text}
                </Text>
              </Row>
            </Col>
          
            <Col span={4}>
              <Button type="primary" 
                shape="circle" 
                icon={<DeleteOutlined />} 
                size={"small"}
                onClick={onDelete}
                style={{justifyContent: 'flex-end'}}
              />
            </Col>
          </Row>
        </Card>
      
    </List.Item>
  );
};

export default TodoItem;
