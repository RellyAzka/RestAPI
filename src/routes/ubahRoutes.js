const express = require("express");
const router = express.Router();
const ubahController = require("../controllers/ubahController");

router.post("/decimal-to-binary", ubahController.decimalToBinary);

router.post("/binary-to-octal", ubahController.binaryToOctal);

router.post("/octal-to-hexadecimal", ubahController.octalToHexadecimal);

router.post("/hexadecimal-to-decimal", ubahController.hexadecimalToDecimal);

module.exports = router;
