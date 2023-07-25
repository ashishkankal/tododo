import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import Page2 from "./pages/Page2";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="p-4 pt-16">
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoPage />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route path="users" element={<UsersPage />}>
            <Route path=":userId" element={<UserPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
