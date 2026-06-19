import axios from "axios";

// get user token

const user = JSON.parse(localStorage.getItem("todoapp"));

// default auth header

axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`;

// create todo

const createTodo = (data) => {
  return axios.post("/todo/create", data);
};

// get all todo

const getAllTodo = (id) => {
  return axios.post(`/todo/getAll/${id}`);
};

const todoServices = { createTodo, getAllTodo };
export default todoServices;
