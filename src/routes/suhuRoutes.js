const express = require("express");
const app = express();
const suhuController = require("../controllers/suhuController");

// End-point untuk Celsius
app.get("/celcius/:celcius", suhuController.celcius);

// End-point Reamur
// app.get("/convert/reamur/:value", (req, res) => {
//   const value = parseFloat(req.params.value);
//   res.json(convertFromReamur(value));
// });

// // End-point untuk Fahrenheit
// app.get("/convert/fahrenheit/:value", (req, res) => {
//   const value = parseFloat(req.params.value);
//   res.json(convertFromFahrenheit(value));
// });

// // End-point Kelvin
// app.get("/convert/kelvin/:value", (req, res) => {
//   const value = parseFloat(req.params.value);
//   res.json(convertFromKelvin(value));
// });

module.exports = app;
