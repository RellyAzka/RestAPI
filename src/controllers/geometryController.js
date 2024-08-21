exports.kubus = (req, res) => {
  const { sisi } = req.body;

  if (!sisi) {
    return res
      .status(400)
      .json({ error: "Input tidak valid, harap masukkan panjang sisi." });
  }

  const volume = Math.pow(sisi, 3);
  const luasPermukaan = 6 * Math.pow(sisi, 2);

  res.json({
    bangunRuang: "Kubus",
    volume,
    luasPermukaan,
  });
};

exports.balok = (req, res) => {
  const { panjang, lebar, tinggi } = req.body;

  if (!panjang || !lebar || !tinggi) {
    return res
      .status(400)
      .json({
        error: "Input tidak valid, harap masukkan panjang, lebar, dan tinggi.",
      });
  }

  const volume = panjang * lebar * tinggi;
  const luasPermukaan =
    2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

  res.json({
    bangunRuang: "Balok",
    volume,
    luasPermukaan,
  });
};

exports.tabung = (req, res) => {
  const { jariJari, tinggi } = req.body;

  if (!jariJari || !tinggi) {
    return res
      .status(400)
      .json({
        error: "Input tidak valid, harap masukkan jari-jari dan tinggi.",
      });
  }

  const volume = Math.PI * Math.pow(jariJari, 2) * tinggi;
  const luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi);

  res.json({
    bangunRuang: "Tabung",
    volume,
    luasPermukaan,
  });
};

exports.bola = (req, res) => {
  const { jariJari } = req.body;

  if (!jariJari) {
    return res
      .status(400)
      .json({ error: "Input tidak valid, harap masukkan jari-jari." });
  }

  const volume = (4 / 3) * Math.PI * Math.pow(jariJari, 3);
  const luasPermukaan = 4 * Math.PI * Math.pow(jariJari, 2);

  res.json({
    bangunRuang: "Bola",
    volume,
    luasPermukaan,
  });
};
