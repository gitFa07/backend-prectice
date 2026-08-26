const morgan = require("morgan");
const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/formlogin", (req, res) => {
  console.log(req.body);
  res.send("Data recieved");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
