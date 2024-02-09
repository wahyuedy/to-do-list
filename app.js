const express = require("express");
const ejs = require("ejs");

const app = express();
const port = 3000;

const add = [];
const complete = [];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { add });
});

app.post("/", (req, res) => {
  const { action } = req.body;
  const newAction = { action };
  add.push(newAction);
  console.log(add);
  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const addId = req.params.id;
  console.log(addId);
  add.splice(addId, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
