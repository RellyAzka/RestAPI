exports.oddEven = (req, res) => {
  const Number = req.params.Number;
  let result = "";
  if (Number % 2 == 0) {
    result = "Bilangan Genap";
  } else {
    result = "Bilangan Ganjil";
  }
  res.json({
    Number: Number,
    result: result,
  });

  return res.json(response);
};
