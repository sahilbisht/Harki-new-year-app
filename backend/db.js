const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:6qpyx0rffuc8G4E0@cluster0.kl2moxr.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
