import axios from "axios";

//https://63996b3e29930e2bb3d23825.mockapi.io/todos

const api = axios.create({
    baseURL: "https://63996b3e29930e2bb3d23825.mockapi.io",
});

export const getTodos = () =>{
    return api.get("/todos");
}

export const addTodos = (requestBody) =>{
    return api.post("/todos", requestBody);
}