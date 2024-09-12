const express = require("express");
const router = express.Router();
const vocalController = require("../controllers/vocalController");

router.post("/vowel/count", vocalController.countVowels);

module.exports = router;
