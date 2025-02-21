// controllers/solicitudController.js
const Solicitud = require('../models/solicitud');

// Crear una nueva solicitud
exports.createSolicitud = async (req, res) => {
  try {
    const solicitud = new Solicitud(req.body);
    await solicitud.save();
    res.status(201).json(solicitud);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las solicitudes
exports.getAllSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.find().populate('universidadId estudiantes');
    res.status(200).json(solicitudes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Cambiar el estado de la solicituds
exports.updateSolicitudEstado = async (req, res) => {
  try {
    const solicitud = await Solicitud.findByIdAndUpdate(
      req.params.id, 
      { estado: req.body.estado },
      { new: true }
    );

    if (!solicitud) {
      return res.status(404).json({ message: 'Solicitud no encontrada' });
    }

    res.status(200).json(solicitud);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
