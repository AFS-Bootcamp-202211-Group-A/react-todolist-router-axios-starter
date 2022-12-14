import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b3529930e2bb3d236a5.mockapi.io"
});

export const getTodos = () => {
    return api.get("/todos")
};

export const postTodo = (todo) => {
    return api.post(`/todos`, todo)
}

export const putTodo = (todo) => {
    return api.put(`/todos/${todo.id}`, todo)
}

export const apiDeleteTodo = (id) => {
    return api.delete(`/todos/${id}`);
}