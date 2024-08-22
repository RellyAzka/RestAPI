const express = require("express");
const app = express();
const convertController = require("../controllers/convertController");

// Decimal ke Binary
app.post("/decimal-to-binary", convertController.decimalToBinary);

// Binary ke Octal
app.post("/binary-to-octal", convertController.binaryToOctal);

// Octal ke Hexadecimal
app.post("/octal-to-hexadecimal", convertController.octalToHexadecimal);

// Hexadecimal ke Decimal
app.post("/hexadecimal-to-decimal", convertController.hexadecimalToDecimal);

module.exports = app;
