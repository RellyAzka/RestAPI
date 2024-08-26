exports.decimalToBinary = (req, res) => {
  const { decimal } = req.body;
  const binary = parseInt(decimal, 10).toString(2);
  res.json({ binary });
};

// Konversi dari biner ke oktal
exports.binaryToOctal = (req, res) => {
  const { binary } = req.body;
  const decimal = parseInt(binary, 2);
  const octal = decimal.toString(8);
  res.json({ octal });
};

// Konversi dari oktal ke heksadesimal
exports.octalToHexadecimal = (req, res) => {
  const { octal } = req.body;
  const decimal = parseInt(octal, 8);
  const hexadecimal = decimal.toString(16).toUpperCase();
  res.json({ hexadecimal });
};

// Konversi dari heksadesimal ke desimal
exports.hexadecimalToDecimal = (req, res) => {
  const { hexadecimal } = req.body;
  const decimal = parseInt(hexadecimal, 16);
  res.json({ decimal });
};
