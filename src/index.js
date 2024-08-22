// import dependecies yang dibutuhkan

const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
// const dotenv = require("dotenv");
const praktikum = require("./routes/praktikumRoutes.js");

const app = express();

// dotenv.config();

const port = 4000;

app.use(express.json());

// // penggunaan body-parser untuk ekstrak data request berformat JSON
// app.use(bodyParser.json())
// // penggunaan body-parser untuk ekstrak data request dari body
// app.use(bodyParser.urlencoded({ extended: true }))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors());

const sec = require("./routes/suhuRoutes.js");

app.use("/sec", sec);

// endpoint "/test" dengan method GET
app.get("/test", (req, res) => {
  // req merupakan variabel yang berisi data request
  // res merupakan variabel yang berisi data response dari end-poin
  // membuat objek yang berisi data yang akan dijadikan response
  let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode,
  };
  // memberikan response dengan format JSON yang berisi objek di atas
  res.json(response);
});

app.use(`/praktikum`, praktikum);

// menjalankan server pada port 8000
app.listen(port, () => {
  console.log(`Server run on http://localhost:${port}`);
});
