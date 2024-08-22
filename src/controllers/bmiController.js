exports.calculateBMI = (req, res) => {
  const { weight, height } = req.query;

  if (!weight || !height) {
    return res
      .status(400)
      .json({ message: "Please provide both weight and height" });
  }

  const bmi = weight / (height * height);

  let status = "";
  if (bmi < 18.5) {
    status = "Kekurangan berat badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal (ideal)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Kelebihan berat badan";
  } else {
    status = "Kegemukan (Obesitas)";
  }

  return res.json({
    bmi: bmi.toFixed(2),
    status,
  });
};
