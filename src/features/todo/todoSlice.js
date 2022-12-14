import { createSlice } from "@reduxjs/toolkit";

const initTodos = [];
export const todoSlice = createSlice({
  name: "todo",
  initialState: initTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    addTodos: (state, action) => {
      return action.payload;
    },
    updateTodo: (state, action) => {
      const newTodo = action.payload;
      return state.map((todo) => (todo.id === newTodo.id ? newTodo : todo));
    },
  },
});

export const { addTodo, removeTodo, addTodos, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
