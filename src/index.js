const express = require("express");
const cors = require("cors");

const ubahRoutes = require("./routes/ubahRoutes.js");
const sec = require("./routes/suhuRoutes.js");
const geometry = require("./routes/geometryRoutes.js");
const bmiRoutes = require("./routes/bmiRoutes.js");
const minMax = require("./routes/minMaxRoutes.js");
const odd = require("./routes/oddEvenRoutes.js");
const vocalRoutes = require("./routes/vocalRoutes");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/sec", sec);
app.use("/geometry", geometry);
app.use("/praktikum", ubahRoutes);
app.use("/bmi", bmiRoutes);
app.use("/minMax", minMax);
app.use("/exam", odd);
app.use("/exam", vocalRoutes);

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
