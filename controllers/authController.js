// controllers/authController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario'); // Usar un modelo de usuario

exports.login = async (req, res) => {
  const { correo, password } = req.body;

  // Buscar al usuario (universidad u hospital) por correos
  const usuario = await Usuario.findOne({ correo });
  if (!usuario) {
    return res.status(400).json({ message: 'Correo o contraseña incorrectos' });
  }

  // Verificar contraseñas
  const match = await bcrypt.compare(password, usuario.password);
  if (!match) {
    return res.status(400).json({ message: 'Correo o contraseña incorrectos' });
  }

  // Crear un token JWT
  const token = jwt.sign({ id: usuario._id, tipo: usuario.tipo }, 'secreto', { expiresIn: '1h' });
  res.status(200).json({ message: 'Login exitoso', token });
};
