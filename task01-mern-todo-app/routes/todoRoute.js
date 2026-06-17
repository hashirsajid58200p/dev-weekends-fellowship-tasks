const express = require("express");
const {
  createTodoController,
  getTodoController,
} = require("../controllers/todoController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// create todo

router.post("/create", authMiddleware, createTodoController);

// get todo

router.post("/getAll/:userId", authMiddleware, getTodoController);

module.exports = router;
