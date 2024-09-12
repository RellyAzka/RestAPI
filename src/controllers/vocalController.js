exports.countVowels = (req, res) => {
  const kalimat = req.body.sentence;
  if (!kalimat) {
    return res.status(400).json({ error: " " });
  }
  const hurufVokal = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  let jumlahVokal = 0;

  const arrayKalimat = [...kalimat];
  arrayKalimat.forEach((huruf) => {
    if (hurufVokal.includes(huruf)) {
      jumlahVokal++;
    }
  });

  res.json({
    sentence: kalimat,
    vowelCount: jumlahVokal,
  });
};
