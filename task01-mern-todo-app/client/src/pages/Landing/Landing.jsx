import React from "react";
import { Link } from "react-router-dom";
const todoImg = "/images/todo.png";

const Landing = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto px-6 items-center gap-12">
      <div className="flex flex-col justify-center">
        <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-4">
          Task Management
        </span>
        <h1 className="text-5xl font-semibold tracking-tight text-white leading-tight">
          Organize your work. <br /> Finally.
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed mt-4 max-w-md">
          Type just anything into the task field and TodoApp's one of its kind natural
          language recognition will instantly fill your to-do list.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            className="inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-6 h-10 font-medium text-sm transition-colors"
            to="/register"
          >
            Register Now
          </Link>
          <Link
            className="inline-flex items-center justify-center border border-[#1f1f1f] hover:bg-[#111111] text-white rounded-lg px-6 h-10 font-medium text-sm transition-colors"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="bg-violet-600/5 rounded-2xl p-6 flex justify-center items-center">
        <img
          className="object-contain max-h-[500px] w-full"
          src={todoImg}
          alt="heroImg"
        />
      </div>
    </div>
  );
};

export default Landing;
