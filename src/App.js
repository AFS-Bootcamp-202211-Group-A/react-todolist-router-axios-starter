import "./App.css";
import TodoList from "./features/todo/TodoList";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DonePage from "./pages/DonePage";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoList />} />;
          <Route path="/about" element={<AboutPage />} />;
          <Route path="*" element={<NotFoundPage />} />;
          <Route path="/done" element={<DonePage />} />;
        </Route>
      </Routes>
    </div>
  );
}

export default App;
