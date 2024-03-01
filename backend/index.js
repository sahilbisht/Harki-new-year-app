// write basic express boilerplate code,
// with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    req.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });
  res.json({
    msg: "Todo created",
  });
});
app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    req.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
