import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("todoapp");
    navigate("/login");
    toast.success("Logout successful");
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("todoapp"));
    if (userData && userData.user && userData.user.username) {
      setUsername(userData.user.username);
    }
  }, []);

  return (
    <nav className="sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#1f1f1f] z-50 py-3">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div>
          <Link className="text-white font-semibold text-sm" to="/home">
            TodoApp
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link
            className="text-zinc-400 hover:text-white text-sm transition-colors"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="text-zinc-400 hover:text-white text-sm transition-colors"
            to="/todolist"
          >
            My To Do
          </Link>

          <div className="flex items-center border-l border-[#1f1f1f] pl-6 ml-2">
            {username && (
              <span className="text-zinc-500 text-xs mr-4">
                Welcome, {username}
              </span>
            )}
            <button
              className="text-zinc-400 hover:text-red-500 transition-colors flex items-center"
              title="logout"
              onClick={logoutHandler}
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
