const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //validation
    if (!username || !email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    // check existing user
    const existingUSer = await userModel.findOne({ email });
    if (existingUSer) {
      return res.status(500).send({
        success: false,
        message: "user already exists",
      });
    }
    // save user
    const newUser = new userModel({ username, email, password });
    await newUser.save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Register Api",
      error,
    });
  }
};

// Login

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // find user
    const user = await userModel.findOne({ email, password });
    // validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "invalid email or password",
      });
    }
    res.status(200).send({
      success: true,
      message: "login successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "login Api",
      error,
    });
  }
};

module.exports = { registerController, loginController };
