const mangoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:AN513EqB5jLGhsSz@cluster0.haswnru.mongodb.net/"
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