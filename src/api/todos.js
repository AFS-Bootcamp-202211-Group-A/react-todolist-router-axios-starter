import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
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