const express = require("express");
const router = express.Router();
const bmiController = require("../controllers/bmiController");

router.get("/bmi", bmiController.calculateBMI);

module.exports = router;
