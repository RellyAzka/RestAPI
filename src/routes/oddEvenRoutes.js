const express = require("express");
const app = express();

app.use(express.json());

const oddEven = require("../controllers/oddEvenController");

app.get("/odd_even/:Number", oddEven.oddEven);

module.exports = app;
