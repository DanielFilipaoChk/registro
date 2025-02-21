const Estudiante = require('../models/estudiante');

// Crear un estudiante
const createEstudiante = async (req, res) => {
  try {
    const estudiante = new Estudiante(req.body);
    await estudiante.save();
    res.status(201).json({ message: 'Estudiante creado con éxito', estudiante });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el estudiante', error });
  }
};

// Obtener todos los estudiantes
const getAllEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.find().populate('universidadId');
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener los estudiantes', error });
  }
};

// Obtener un estudiante por IDs
const getEstudianteById = async (req, res) => {
  try {
    const estudiante = await Estudiante.findById(req.params.id).populate('universidadId');
    if (!estudiante) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    res.status(200).json(estudiante);
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener el estudiante', error });
  }
};

// Actualizar la información de un estudiante
const updateEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!estudiante) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    res.status(200).json({ message: 'Estudiante actualizado con éxito', estudiante });
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el estudiante', error });
  }
};

// Eliminar un estudiante
const deleteEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByIdAndDelete(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    res.status(200).json({ message: 'Estudiante eliminado con éxito' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar el estudiante', error });
  }
};

module.exports = {
  createEstudiante,
  getAllEstudiantes,
  getEstudianteById,
  updateEstudiante,
  deleteEstudiante,
};
