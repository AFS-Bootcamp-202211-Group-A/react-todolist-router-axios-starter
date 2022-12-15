import axios from "axios";

const api = axios.create({
    // baseURL: "https://63996b3629930e2bb3d236e0.mockapi.io"
    baseURL: "http://localhost:8080"
});

export const getTodosAPI = ()=>{
    
    return api.get("/todos")
}

export const addTodoAPI = (body)=>{
    return api.post("/todos",body)
}


export const updateTodoAPI = (body)=>{
    const newBody  = 
    {
        "done": !body.done,
        "text": body.text
    };
    return api.put("/todos/"+body.id,newBody)
}

export const deleteTodoAPI = (id)=>{
    return api.delete("/todos/"+id)
}

export const updateTodoContentAPI = (body)=>{
    const newBody  = 
    {
        "color": body.color,
        "text": body.text
    };
    return api.put("/todos/"+body.id,newBody)
}