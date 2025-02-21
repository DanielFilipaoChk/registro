const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController');

// Crear un nuevo estudiante
router.post('/estudiantes', estudianteController.createEstudiante);

// Obtener todos los estudiantes
router.get('/estudiantes', estudianteController.getAllEstudiantes);

// Obtener un estudiante por IDs
router.get('/estudiantes/:id', estudianteController.getEstudianteById);

// Actualizar la información de un estudiante
router.put('/estudiantes/:id', estudianteController.updateEstudiante);

// Eliminar un estudiante
router.delete('/estudiantes/:id', estudianteController.deleteEstudiante);

module.exports = router;
