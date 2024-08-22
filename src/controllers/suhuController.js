exports.celcius = (req, res) => {
  let celsius = req.params.celcius;
  let reamur = celsius * 0.8;
  let fahrenheit = (celsius * 9) / 5 + 32;
  let kelvin = celsius + 273.15;

  let response = {
    celsius: celsius,
    result: {
      reamur: reamur,
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    },
  };

  return res.json(response);
};
