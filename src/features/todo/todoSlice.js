import { createSlice } from "@reduxjs/toolkit";

const initTodos = [
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push({...action.payload });
    },
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    addTodos:(state,action)=>{
      return action.payload;
    },
    updateTodo:(state, action)=>{
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text} : todo
      );
    },
    updateColorTodo:(state, action)=>{
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, color: action.payload.color} : todo
      );
    }
  },
});

export const { addTodo, toggleTodo, deleteTodo, addTodos, updateTodo,updateColorTodo } = todoSlice.actions;

export default todoSlice.reducer;
