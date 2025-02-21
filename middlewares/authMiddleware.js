// middlewares/authMiddleware.jsss

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  }

  try {
    const decoded = jwt.verify(token, 'secreto');
    req.user = decoded; // Puedes guardar el id del usuario decodificado
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token inválido' });
  }
};
