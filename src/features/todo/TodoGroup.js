import TodoItem from "./TodoItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import {  List, Divider, Typography } from 'antd';

const TodoGroup = (props) => {

  const GetToDos = ()=>{
    return props.todos.map((todo) => {
      return <TodoItem todo={todo} key={todo.id} />;
    });
  }
  return <div id="scrollableDiv"
            style={{
              height: "75vh",
              overflow: 'auto',
              padding: '0 16px',
              border: '1px solid rgba(140, 140, 140, 0.35)',
            }}>
          <InfiniteScroll
                    dataLength={props.todos.length}
                    scrollableTarget="scrollableDiv"
                  >
                
                  <List
                          style={{}}
                          header={
                            <Typography.Title level={2} style={{color:"#E1D9D1"}}>
                              To Do List
                            </Typography.Title>
                          }
                          bordered>
                        <GetToDos/>
                  </List>
            </InfiniteScroll>
          </div>
  
};

export default TodoGroup;
