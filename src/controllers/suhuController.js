exports.celcius = (req, res) => {
  let celsius = parseFloat(req.params.celcius);
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

// Konversi dari Fahrenheit ke Celsius, Reamur, dan Kelvin
exports.fahrenheit = (req, res) => {
  let fahrenheit = parseFloat(req.params.fahrenheit);
  let celsius = (fahrenheit - 32) * (5 / 9);
  let reamur = (fahrenheit - 32) * (4 / 9);
  let kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;

  let response = {
    fahrenheit: fahrenheit,
    result: {
      celsius: celsius,
      reamur: reamur,
      kelvin: kelvin,
    },
  };

  return res.json(response);
};

// Konversi dari Reamur ke Celsius, Fahrenheit, dan Kelvin
exports.reamur = (req, res) => {
  let reamur = parseFloat(req.params.reamur);
  let celsius = reamur / 0.8;
  let fahrenheit = (reamur * 9) / 4 + 32;
  let kelvin = reamur / 0.8 + 273.15;

  let response = {
    reamur: reamur,
    result: {
      celsius: celsius,
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    },
  };

  return res.json(response);
};

// Konversi dari Kelvin ke Celsius, Fahrenheit, dan Reamur
exports.kelvin = (req, res) => {
  let kelvin = parseFloat(req.params.kelvin);
  let celsius = kelvin - 273.15;
  let fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
  let reamur = (kelvin - 273.15) * 0.8;

  let response = {
    kelvin: kelvin,
    result: {
      celsius: celsius,
      fahrenheit: fahrenheit,
      reamur: reamur,
    },
  };

  return res.json(response);
};
