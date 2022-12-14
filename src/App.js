import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./app/pages/AboutPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import TodoPage from "./app/pages/TodoPage";
import TodoList from "./features/todo/TodoList";

function App() {
    return (
        <div className="App">
            <Routes>
              <Route path="/" element={<TodoPage/>}/>
              <Route path="/todolist" element={<TodoPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
