const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todoRouter = require("./routers/todoRouter");
const todo = require("./model/todo");
const { join } = require("path");

// Connecting to mongodb
mongoose.connect("mongodb://localhost:27017/todo_app");

app.use(express.static(join(__dirname, "/public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(todoRouter);

app.get("/", async (req, res) => {
  const todosList = await todo.find();

  res.render("index", { todos: todosList });
});

app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});
