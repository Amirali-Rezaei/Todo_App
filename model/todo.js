const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("todo", todoSchema);
