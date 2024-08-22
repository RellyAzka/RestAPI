const express = require("express");
const app = express();
const suhuController = require("../controllers/suhuController");

// End-point untuk Celsius
app.get("/celcius/:celcius", suhuController.celcius);

module.exports = app;
