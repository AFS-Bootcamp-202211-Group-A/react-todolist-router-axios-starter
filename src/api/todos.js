import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b3629930e2bb3d236e0.mockapi.io"
});

export const getTodos = ()=>{
    
    return api.get("/todos")
}

export const postTodos = (body)=>{
    return api.post("/todos",body)
}


export const updateTodos = (body)=>{
    const newBody  = 
    {
        "done": !body.done,
        "text": body.text
    };
    return api.put("/todos/"+body.id,newBody)
}

export const deleteTodos = (id)=>{
    return api.delete("/todos/"+id)
}