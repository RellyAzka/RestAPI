// // exports.countVowels = (req, res) => {
// //     const kalimat = req.body.sentence;
// //     if (!kalimat) {
// //         return res.status(400).json({ error: "Kalimat diperlukan" });
// //     }

// //     const hurufVokal = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
// //     let jumlahVokal = 0;

// //     const arrayKalimat = [...kalimat];
// //     arrayKalimat.forEach(huruf => {
// //         if (hurufVokal.includes(huruf)) {
// //             jumlahVokal++;
// //         }
// //     });

// //     res.json({
// //         sentence: kalimat,
// //         vowelCount: jumlahVokal
// //     });
// // };

// // const express = require('express');
// // const router = express.Router();
// // const vowelController = require('../controllers/vowelController');

// // router.post('/vowel/count', vowelController.countVowels);

// // module.exports = router;

// const express = require('express');
// const app = express();
// const vocalRoutes = require('./routes/vocalRoutes');

// app.use(express.json());
// app.use('/exam', vocalRoutes);

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(Server is running on port ${PORT});
// });
