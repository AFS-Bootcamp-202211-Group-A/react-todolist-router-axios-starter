import "./App.css";
import TodoList from "./features/todo/TodoList";
import {Routes, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DonePage from "./pages/DonePage";

function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <Routes>
        <Route path="/" element={<TodoList />} />;
        <Route path="/about" element={<AboutPage/>} />;
        <Route path="*" element={<NotFoundPage/>} />;
        <Route path="/done" element={<DonePage/>} />;
      </Routes>
    </div>
  );
}

export default App;
