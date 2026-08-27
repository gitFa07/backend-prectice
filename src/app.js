//Server is created in app.js

const express = require("express");

const app = express();

app.post("/notes", (req, res) => {
  console.log(req.body);
});

module.exports = app;
