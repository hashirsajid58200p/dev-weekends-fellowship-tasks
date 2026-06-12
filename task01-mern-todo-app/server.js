const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

//env config
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1/test", require("./routes/testRouter"));

// port
const Port = process.env.PORT;

// listen
app.listen(Port, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
