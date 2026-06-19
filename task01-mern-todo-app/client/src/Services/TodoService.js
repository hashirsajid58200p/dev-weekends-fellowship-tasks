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

// Update Todo

const updateTodo = (id, data) => {
  return axios.patch(`/todo/update/${id}`, data);
};

// Delete Todo
const deleteTodo = (id) => {
  return axios.delete(`/todo/delete/${id}`);
};

const todoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };
export default todoServices;
