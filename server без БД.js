var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const port = 3000;

let users = [];
let nextId = 0;

app.use(bodyParser.json());

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const user = {
    name: req.body.name,
    id: nextId
  };
  nextId += 1;
  users.push(user);
  res.send("Ok");
});

app.patch("/users/:id", (req, res) => {
  const index = users.findIndex(user => {
    return user.id == +req.params.id;
  });
  if (index >= 0) users[index].name = req.body.name;
  res.send("Ok");
});

app.delete("/users/:id", (req, res) => {
  const index = users.findIndex(user => {
    return user.id == +req.params.id;
  });
  if (index >= 0) {
    users.splice(index, 1);
    res.send("User was deleted");
  } else {
    res.send("User wasn't found");
  }
});

app.listen(port, () => {
  console.log(`port=${port}`);
});
