exports.minMax = (req, res) => {
  const numbers = req.body.numbers;

  let max = numbers[0];
  let min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }

    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  let response = {
    numbers: numbers,

    max: max,
    min: min,
  };

  return res.json(response);
};
