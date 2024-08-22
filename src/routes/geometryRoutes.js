const express = require("express");
const app = express();
const geometryController = require("../controllers/geometryController");

app.post("/kubus", geometryController.kubus);
app.post("/balok", geometryController.balok);
app.post("/tabung", geometryController.tabung);
app.post("/bola", geometryController.bola);

module.exports = app;
