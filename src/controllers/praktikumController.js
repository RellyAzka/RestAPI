exports.profile = (req, res) => {
  let name = req.params.name;
  let age = req.params.age;

  let response = {
    nama: name,
    umur: age,
  };

  return res.json(response);
};
exports.identitas = (req, res) => {
  let nama = req.query.nama;
  let kelas = req.query.kelas;

  let response = {
    nama: nama,
    kelas: kelas,
  };

  return res.json(response);
};

exports.hitungBujurSangkar = (req, res) => {
  // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
  let panjang = Number(req.body.panjang);
  let lebar = Number(req.body.lebar);

  // hitung luas dan keliling
  let luas = panjang * lebar;
  let keliling = 2 * (panjang + lebar);

  // membuat objek yang berisi data yang akan dijadikan response
  let response = {
    panjang: panjang,
    lebar: lebar,
    luas: luas,
    keliling: keliling,
  };

  // memberikan response dengan format JSON yang berisi objek di atas
  res.json(response);
};
