const todoModel = require("../models/todoModel");

const createTodoController = async (req, res) => {
  try {
    const { title, description, isCompleted, createdBy } = req.body;
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "please provide title and description",
      });
    }
    const todo = new todoModel({ title, description, createdBy });
    const result = await todo.save();
    res.status(201).send({
      success: true,
      message: "task created successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in created todo api",
      error,
    });
  }
};

// Get Todo
const getTodoController = async (req, res) => {
  try {
    // get user id
    const { userId } = req.params;
    // validate
    if (!userId) {
      return res.status(404).send({
        success: false,
        message: "no user found with this id",
      });
    }
    // find task
    const todos = await todoModel.find({ createdBy: userId });
    if (!todos) {
      return res.status(404).send({
        success: true,
        message: "no todo found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Your to do list",
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in getting todo api",
      error,
    });
  }
};

module.exports = { createTodoController, getTodoController };
