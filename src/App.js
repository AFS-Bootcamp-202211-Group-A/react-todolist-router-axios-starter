import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodoList from "./features/todo/TodoList";
import AboutPage from "./pages/AboutPage";
import DoneListPage from "./pages/DoneListPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/done" element={<DoneListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
