const express = require("express");
const router = express.Router();
const suhuController = require("../controllers/suhuController");

router.get("/celcius/:celcius", suhuController.celcius);

router.get("/fahrenheit/:fahrenheit", suhuController.fahrenheit);

router.get("/reamur/:reamur", suhuController.reamur);

router.get("/kelvin/:kelvin", suhuController.kelvin);

module.exports = router;
