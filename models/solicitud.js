// models/solicitud.js
const mongoose = require('mongoose');

const solicitudSchema = new mongoose.Schema({
  universidad: { type: mongoose.Schema.Types.ObjectId, ref: 'Universidad', required: true },
  estudiante: { type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante', required: true },
  fechaSolicitud: { type: Date, default: Date.now },
  estado: { type: String, enum: ['pendiente', 'aceptada', 'rechazada'], default: 'pendiente' },
});

module.exports = mongoose.model('Solicitud', solicitudSchema);
