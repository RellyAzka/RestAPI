const express = require("express");
const app = express();

app.use(express.json());

const praktikumControllers = require("../controllers/praktikumController");

// ENDPOINT PROFILE
app.get("/profile/:name/:age", praktikumControllers.profile);
app.get("/identitas", praktikumControllers.identitas);
app.post("/bujursangar", praktikumControllers.hitungBujurSangkar);

module.exports = app;
