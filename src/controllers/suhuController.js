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
// function convertFromReamur(reamur) {
//   const celsius = reamur / 0.8;
//   const fahrenheit = (reamur * 9) / 4 + 32;
//   const kelvin = celsius + 273.15;

//   return {
//     reamur,
//     result: {
//       celsius,
//       fahrenheit,
//       kelvin,
//     },
//   };
// }

// function convertFromFahrenheit(fahrenheit) {
//   const celsius = ((fahrenheit - 32) * 5) / 9;
//   const reamur = ((fahrenheit - 32) * 4) / 9;
//   const kelvin = celsius + 273.15;

//   return {
//     fahrenheit,
//     result: {
//       celsius,
//       reamur,
//       kelvin,
//     },
//   };
// }

// function convertFromKelvin(kelvin) {
//   const celsius = kelvin - 273.15;
//   const reamur = (kelvin - 273.15) * 0.8;
//   const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;

//   return {
//     kelvin,
//     result: {
//       celsius,
//       reamur,
//       fahrenheit,
//     },
//   };
// }
