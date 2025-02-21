// routes/solicitudRoutes.js
const express = require('express');
const router = express.Router();
const solicitudController = require('../controllers/solicitudController');
// routes/solicitudRoutes.js
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para crear una nueva solicitud
router.post('/solicitudes', solicitudController.createSolicitud);

// Ruta para obtener todas las solicitudes
router.get('/solicitudes', solicitudController.getAllSolicitudes);

// Ruta para actualizar el estado de la solicitud
router.put('/solicitudes/:id', solicitudController.updateSolicitudEstado);
router.put('/solicitudes/:id', authMiddleware, solicitudController.updateSolicitudEstado);


module.exports = router;
