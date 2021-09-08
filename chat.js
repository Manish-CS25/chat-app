const express = require("express");
const app = express();
const router = express().Router;
const mongoose = require("mongoose");
const port = 5000;

const info = require("./models/schema");

mongoose
  .connect("mongodb://localhost:27017/neeru", {})
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("not connected");
    process.exit();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
  // res.send("hello");
});

app.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    var students = new info({
      email: req.body.email,
      password: req.body.password,
    });
    let savedata = await students.save();
    res.status(201).render("index");
  } catch (err) {
    res.send(err);
  }
});
app.listen(port, (req, res) => {
  console.log(`app running on port:${port}`);
});
