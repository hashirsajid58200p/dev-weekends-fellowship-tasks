import React from "react";
import { Link } from "react-router-dom";
import todoImg from "../../assets/images/todo.png";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="hero">
      <div className="intro-text">
        <h1>
          <span className="tagline1">Organize work and life</span> <br />
          <span className="tagline2">Finally</span>
        </h1>
        <p>
          type just anything into the task field and todolist <br /> on of its
          kind natural language recognition will instantly fill your to-do-list
        </p>
        <Link className="btn red" to="/register">
          Register Now
        </Link>
        <Link className="btn blue" to="/login">
          Login
        </Link>
      </div>
      <div className="">
        <img src={todoImg} alt="heroImg" width={"100%"} height={515} />
      </div>
    </div>
  );
};

export default Landing;
