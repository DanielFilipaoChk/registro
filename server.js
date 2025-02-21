const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importar rutas
const universidadRoutes = require('./routes/universidadRoutes');
const estudianteRoutes = require('./routes/estudianteRoutes');

// Crear la app Express
const app = express();

// Middleware
app.use(express.json()); // Para poder leer los datos JSON del cuerpo de las peticiones
app.use(cors()); // Habilitar CORS

// Conexión a la base de datos (MongoDB)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Usar las rutas
app.use('/api', universidadRoutes);
app.use('/api', estudianteRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor en funcionamiento!');
});

// Puerto en el que el servidor escuchará
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
