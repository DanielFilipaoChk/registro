const mongoose = require('mongoose');

const universidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,  // El nombre es obligatorio
  },
  correo: {
    type: String,
    required: true,  // El correo es obligatorio
  },
  direccion: {
    type: String,
    required: true,  // La dirección es obligatoria
  },
  datosAdministrativos: {  // Este campo ahora es opcional
    type: Object,  // Puedes definir el tipo adecuado según tus necesidades (por ejemplo, Object, String, etc.)
    required: false,  // Ya no es obligatorio
  },
});

const Universidad = mongoose.model('Universidad', universidadSchema);

module.exports = Universidad;
