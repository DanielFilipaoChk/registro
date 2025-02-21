const Universidad = require('../models/universidad');

// Crear una nueva universidad
exports.createUniversidad = async (req, res) => {
  try {
    const { nombre, correo, direccion, datosAdministrativos } = req.body;

    const universidad = new Universidad({
      nombre,
      correo,
      direccion,
      datosAdministrativos,  // Datos administrativos, aunque ahora es opcional
    });

    await universidad.save();
    res.status(201).json({ message: 'Universidad creada con éxito', universidad });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la universidad', error });
  }
};

// Obtener todas las universidades
exports.getAllUniversidades = async (req, res) => {
  try {
    const universidades = await Universidad.find();
    res.status(200).json(universidades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener universidades', error });
  }
};
