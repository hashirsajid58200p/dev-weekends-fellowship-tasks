import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Navbar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  //logout

  const logoutHandler = () => {
    localStorage.removeItem("todoapp");
    navigate("/login");
    toast.success("Logout successful");
  };

  // get username
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("todoapp"));
    console.log("username data ===>" + userData && userData.user.username);
    setUsername(userData && userData.user.username);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <h4 className="navbar-brand">
              <i className="fa-solid fa-user-tie"></i>
              <i>Welcome</i>
              {username}
            </h4>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/todolist">
                  My To Do
                </Link>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
                  title="logout"
                  onClick={logoutHandler}
                >
                  <i className="fa-solid fa-power-off text-danger fa-2x"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
