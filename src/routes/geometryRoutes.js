const express = require("express");
const router = express.Router();
const geometryController = require("../controllers/geometryController");

router.post("/kubus", geometryController.kubus);
router.post("/balok", geometryController.balok);
router.post("/tabung", geometryController.tabung);
router.post("/bola", geometryController.bola);

module.exports = router;
