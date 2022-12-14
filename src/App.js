import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./features/todo/TodoList";
import AboutPage from "./pages/AboutPage";
import DoneTodo from "./features/todo/DoneTodo";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/done" element={<DoneTodo />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

// navigation: links
// todolist page -> TodoList
// about page -> text
// done list page -> Donelist - can't edit
// 404 page -> text
