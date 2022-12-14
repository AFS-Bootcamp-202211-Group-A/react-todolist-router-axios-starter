import axios from 'axios';

const api = axios.create({
    baseURL: "https://63996b3829930e2bb3d23717.mockapi.io",
})

export const getTodos = () => {
    return api.get("/todos");
};

export const postTodos = (todo) => {
    return api.post("/todos", todo);
}
export const putDone = (id, todo) => {
    return api.put("/todos/"+id, todo);
}
export const deleteTodoAPI = (id) => {
    return api.delete("/todos/"+id);
}
