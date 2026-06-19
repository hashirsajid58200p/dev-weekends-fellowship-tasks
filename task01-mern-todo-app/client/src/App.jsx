import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Todos from "./pages/Todos/Todos";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("todoapp"));
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todolist"
          element={
            <ProtectedRoute>
              <Todos />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
