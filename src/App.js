import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./app/pages/AboutPage";
import DonePage from "./app/pages/DonePage";
import NotFoundPage from "./app/pages/NotFoundPage";
import TodoPage from "./app/pages/TodoPage";
import Layout from "./layout/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<TodoPage />} />
                    <Route path="/done" element={<DonePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
