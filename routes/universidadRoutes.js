const express = require('express');
const router = express.Router();
const universidadController = require('../controllers/universidadController');

// Ruta para crear una nueva universidad
router.post('/universidades', universidadController.createUniversidad);

// Ruta para obtener todas las universidades
router.get('/universidades', universidadController.getAllUniversidades);

module.exports = router;
