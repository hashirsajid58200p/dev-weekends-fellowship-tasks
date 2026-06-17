const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

//env config
dotenv.config();

// DB connection

connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1/test", require("./routes/testRouter"));
app.use("/api/v1/user", require("./routes/userRoute"));
app.use("/api/v1/todo", require("./routes/todoRoute"));
// port
const Port = process.env.PORT;

// listen
app.listen(Port, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
