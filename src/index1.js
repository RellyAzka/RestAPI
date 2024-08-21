const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const geometryRoutes = require("./routes/geometryRoutes");

// Use routes
app.use("/api", geometryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
