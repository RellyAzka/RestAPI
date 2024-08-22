const express = require("express");
const router = express.Router();
const convertController = require("../controllers/convertController");

// Decimal ke Binary
router.post("/decimal-to-binary", convertController.decimalToBinary);

// Binary ke Octal
router.post("/binary-to-octal", convertController.binaryToOctal);

// Octal ke Hexadecimal
router.post("/octal-to-hexadecimal", convertController.octalToHexadecimal);

// Hexadecimal ke Decimal
router.post("/hexadecimal-to-decimal", convertController.hexadecimalToDecimal);

module.exports = router;
