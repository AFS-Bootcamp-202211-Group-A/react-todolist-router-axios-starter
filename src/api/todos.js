import axios from "axios";

const api = axios.create({
  baseURL: "https://63996b3316b0fdad773c180e.mockapi.io/",
});

export const getTodos = () => {
  return api.get("/todos");
};

export const postTodo = (newTodo) => {
  return api.post("/todos", newTodo);
};
