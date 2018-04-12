const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

let todoList = [{
    todo: "learn Express",
    done: true
  },
  {
    todo: "learn React",
    done: false
  }
]

// using cors
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.get("/todo", (req, res) => {
  res.send({data: todoList});
});

app.get("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;
  if (index < length) {
    res.send({ data: todoList[index] })
  } else {
    res.send("data not found");;
  }
});

app.post("/todo", (req, res) => {
  let todo = req.body.todo;
  let done = JSON.parse(req.body.done);
  console.log(typeof todo);
  if (todo === "") {
    res.send("todo data is empty");
  } else {
    newTodo = {
      todo: todo,
      done: done
    }
    todoList.push(newTodo);
    res.send({data: newTodo})
  }
});

app.delete("/todo/:id", (req, res) => {
  let length = todoList.length;
  let index = req.params.id;

  if (index < length) {
    todoList.splice(index, 1);
    res.send({ success: true, data: todoList });
  } else {
    res.send({ sucess: false, message: "data not found" });
  }
});

app.get("/todo/search", (req, res) => {
  let search = req.query.todo;
  let result = todoList.filter(e =>
    e.todo.toLowerCase().includes(search.toLowerCase())
  );
  res.send({ success: true, result: result });
});

app.listen(PORT, () =>
  console.log(`example app running on port ${PORT}`));
