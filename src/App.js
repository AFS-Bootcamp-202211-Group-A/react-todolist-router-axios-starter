import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodoList from "./features/todo/TodoList";
import Layout from "./layout/Layout";
import AboutPage from "./pages/AboutPage";
import DoneListPage from "./pages/DoneListPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/done" element={<DoneListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
