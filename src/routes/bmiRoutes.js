const express = require("express");
const app = express();
const bmiController = require("../controllers/bmiController");

app.get("/bmi", bmiController.calculateBMI);

module.exports = app;
