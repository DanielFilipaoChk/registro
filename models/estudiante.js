// models/estudiante.jss
const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true },
  carrera: { type: String, required: true },
  universidadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Universidad', required: true },  // Relación con la universidad
});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante;
