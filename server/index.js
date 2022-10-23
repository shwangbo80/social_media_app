const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MONGO DB");
});

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//Routes middlewares
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen("8800", () => {
  console.log("Server is running");
});
