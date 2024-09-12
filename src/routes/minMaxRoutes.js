const express = require("express");
const app = express();
app.use(express.json());
const minMaxController = require("../controllers/minMaxController");

app.post("/minMax", minMaxController.minMax);

module.exports = app;
