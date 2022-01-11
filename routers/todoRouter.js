const express = require("express");
const router = express.Router();
const Todo = require("../model/todo");

router.post("/createTodo", async (req, res) => {
  try {
    const newTodo = await Todo.create({
      title: req.body.title,
    });

    console.log(newTodo);
    await newTodo.save();

    res.send("Successful");
  } catch (error) {
    res.send("Error");
  }
});

router.delete("/deleteTodo/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

router.patch("/editTodo/:id", async (req, res) => {
  await Todo.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    isDone: Boolean(req.body.isDone),
  });

  res.send("Edited");
});

module.exports = router;
