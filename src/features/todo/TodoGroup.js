import TodoItem from "./TodoItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import {  List, Typography } from 'antd';

const TodoGroup = (props) => {

  const GetToDos = ()=>{
    return props.todos.map((todo) => {
      return <TodoItem todo={todo} key={todo.id} />;
    });
  }
  return <div id="scrollableDiv"
            style={{
              height: "65vh",
              overflow: 'auto',
              padding: '0 16px',
            }}>
          <InfiniteScroll
                    dataLength={props.todos.length}
                    scrollableTarget="scrollableDiv"
                  >
                
                  <List
                          style={{backgroundColor:"#282b30"}}
                          header={
                            <Typography.Title level={2} style={{color:"#E1D9D1"}}>
                              To Do List 🕒
                            </Typography.Title>
                          }
                          bordered>
                        <GetToDos/>
                  </List>
            </InfiniteScroll>
          </div>
  
};

export default TodoGroup;
