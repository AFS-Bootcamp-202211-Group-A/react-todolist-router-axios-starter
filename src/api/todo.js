import axios from "axios";

//https://63996b3e29930e2bb3d23825.mockapi.io/todos

const api = axios.create({
    baseURL: "http://localhost:8080",
});

export const getTodosAPI = () =>{
    return api.get("/todos");
}

export const addTodosAPI = (requestBody) =>{
    return api.post("/todos", requestBody);
}

export const updateTodoAPI = (id, requestBody) =>{
    console.log("updates");
    return api.put("todos/"+id, requestBody);
}

export const deleteTodoAPI = (id) =>{
    return api.delete("todos/"+id);
}