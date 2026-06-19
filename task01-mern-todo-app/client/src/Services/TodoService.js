import axios from "axios";

// Add a request interceptor to dynamically add the token to every request
axios.interceptors.request.use(
  (config) => {
    try {
      const user = JSON.parse(localStorage.getItem("todoapp"));
      if (user && user.token) {
        config.headers["Authorization"] = `bearer ${user.token}`;
      }
    } catch (e) {
      console.error("Error reading token from localStorage:", e);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// create todo

const createTodo = (data) => {
  return axios.post("/todo/create", data);
};

// get all todo

const getAllTodo = (id) => {
  return axios.get(`/todo/getAll/${id}`);
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
