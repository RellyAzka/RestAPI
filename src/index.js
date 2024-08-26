// index.js

const express = require("express");
const cors = require("cors");

const ubahRoutes = require("./routes/ubahRoutes.js"); // Sesuaikan path jika perlu
const geometry = require("./routes/geometryRoutes");
const sec = require("./routes/suhuRoutes.js");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/sec", sec);
app.use("/geometry", geometry);
app.use("/praktikum", ubahRoutes); // Sesuaikan dengan penggunaan rute yang benar

// Endpoint "/test" dengan method GET
app.get("/test", (req, res) => {
  let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server run on http://localhost:${port}`);
});
