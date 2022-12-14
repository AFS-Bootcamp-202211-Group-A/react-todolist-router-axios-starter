import { applyMiddleware } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b3529930e2bb3d2369b.mockapi.io/",
});

export const getTodos = () => {
    return api.get("/todos");
}

