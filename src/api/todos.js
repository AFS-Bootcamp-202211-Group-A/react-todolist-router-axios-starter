import axios from "axios";

const api = axios.create({
  // baseURL: "https://63996b3316b0fdad773c180e.mockapi.io/",
  baseURL: "http://localhost:8080/",
});

export const getTodos = () => {
  return api.get("/todos");
};

export const postTodo = (newTodo) => {
  return api.post("/todos", newTodo);
};

export const putTodo = (id, newTodo) => {
  return api.put("/todos/" + id, newTodo);
};

export const deleteTodo = (id) => {
  return api.delete("/todos/" + id);
};
