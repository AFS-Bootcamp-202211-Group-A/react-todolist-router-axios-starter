import axios from "axios";

const api = axios.create({
    //baseURL: "https://63996b3529930e2bb3d2369b.mockapi.io/",
    baseURL: "http://localhost:8080/"
});

export const getTodos = () => {
    return api.get("/todos");
}

export const postTodos = (todo) => {
    return api.post("/todos", todo);
}

export const toggleTodos = (todo) => {
    return api.put(`/todos/${todo.id}`, {done: !todo.done});
}

export const deleteTodos = (todo) => {
    return api.delete(`/todos/${todo.id}`);
}

export const updateTodos = (todo) => {
    return api.put(`/todos/${todo.id}`, {text: todo.text});
}

// step1: postTodo({todo})