import axios from 'axios';

const api = axios.create({
    baseURL: "https://63996b3829930e2bb3d23717.mockapi.io",
})

export const getTodos = () => {
    return api.get("/todos");
};
