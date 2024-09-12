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
    status = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    status = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  res.json({
    bmi: bmi,
    status: status,
  });
};