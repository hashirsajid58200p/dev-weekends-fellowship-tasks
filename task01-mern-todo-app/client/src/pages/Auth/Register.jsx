import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../services/AuthService";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utils/ErrorMessage";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    try {
      e.preventDefault();
      const data = { email, password, username };
      const res = await AuthServices.registerUser(data);
      toast.success(res.data.message);
      navigate("/login");
      console.log(res.data);
    } catch (err) {
      toast.error(getErrorMessage(err));
      console.log(err);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-24">
      <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-8">
        <div className="text-center mb-6">
          <span className="text-white font-semibold text-lg">TodoApp</span>
        </div>
        <form onSubmit={registerHandler}>
          <div className="mb-4">
            <label className="block text-sm text-zinc-400 mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-zinc-400 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-zinc-400 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-lg h-10 font-medium text-sm transition-colors mb-4"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="text-center text-zinc-400 text-sm">
          Already a user? Please{" "}
          <Link className="text-violet-400 hover:underline" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
