import React from 'react'
import { useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import {  List,  Typography ,Card} from 'antd';

export default function DoneList() {
    const todos = useSelector((state) => {
        return state.todoList;
      });

     const ListItems = ()=>{
        return todos.filter((todo) => todo.done === true)
            .map((todo)=>{
            return <List.Item>
                        <Card style={{  border: "1px solid black",
                            margin: "auto",
                            marginBottom:"5px",
                            width:"90%",
                            }}>
                                {todo.text}
                        </Card>
                    </List.Item>;
                    
        })
    }
    
      return <div id="scrollableDiv"
                    style={{
                        height: "79vh",
                        overflow: 'auto',
                        padding: '0 16px',
                    }}>
                    <InfiniteScroll
                        dataLength={todos.length}
                        scrollableTarget="scrollableDiv"
                    >
                            <List
                                    style={{backgroundColor:"#282b30"}}
                                    header={
                                    <Typography.Title level={2} style={{color:"#E1D9D1"}}>
                                         Completed List ✔️
                                    </Typography.Title>
                                    }
                                    bordered>
                                <ListItems/>
                            </List>
                    </InfiniteScroll>
                    </div>;
      
}


