const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const { findDogById, findDogs, createDogs,} = require('../controllers/dog.controller');
const { dogsTemperament } = require('../controllers/temperament.controller');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', findDogs);
router.get('/dogs/:id', findDogById);
router.get('/temperaments', dogsTemperament);
router.post('/dog', createDogs);



module.exports = router;
