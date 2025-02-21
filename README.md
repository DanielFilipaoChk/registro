# Proyecto de Gestión de Solicitudes Estudiantiles

Este es un sistema para gestionar estudiantes, universidades y solicitudes relacionadas con estudiantes que desean postularse a universidades. El sistema permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre estudiantes y solicitudes, así como gestionar el login de los usuarios (universidades u hospitales).

## Requisitos

- **Node.js** (v14 o superior)
- **MongoDB** (v5 o superior)

## Instalación

### 1. Clonar el Repositorio

Clona el repositorio en tu máquina local:

```bash
git clone <url-del-repositorio>
cd <nombre-del-repositorio>


2. Instalar Dependencias
Dentro del directorio del proyecto, ejecuta el siguiente comando para instalar las dependencias:
npm install

3. Configurar la Base de Datos
Asegúrate de tener una instancia de MongoDB en ejecución en localhost:27017 o ajusta la URL de conexión en el archivo .env según tu configuración:

bash
Copiar
MONGO_URI=mongodb://127.0.0.1:27017/registroDB
PORT=5000


4. Iniciar el Servidor
Una vez que las dependencias estén instaladas y la base de datos esté configurada, puedes iniciar el servidor con:

bash
Copiar
npm start

El servidor estará corriendo en http://localhost:5000.

Estructura del Proyecto
Directorios Principales:
controllers/: Contiene la lógica de los controladores para manejar las solicitudes HTTP de los diferentes modelos (Estudiantes, Solicitudes, Usuarios, Universidades).
models/: Contiene los esquemas de mongoose para la base de datos, incluyendo los modelos de Estudiante, Solicitud, y Universidad.
routes/: Contiene las rutas del servidor para interactuar con los controladores.
middlewares/: Contiene middlewares para la autenticación y autorización (por ejemplo, verificación de tokens JWT).
config/: Configuraciones del entorno, como la conexión con la base de datos y el puerto.
Funcionalidades
1. Autenticación (Login)
Endpoint: POST /login
Descripción: Permite a los usuarios (universidad u hospital) hacer login con su correo y contraseña.
Respuesta exitosa: 200 OK con un token JWT.
Respuesta de error: 400 Bad Request si las credenciales no son correctas.
2. Estudiantes
a. Crear Estudiante
Endpoint: POST /estudiantes
Descripción: Permite crear un nuevo estudiante.
Respuesta exitosa: 201 Created con los detalles del estudiante.
b. Obtener todos los estudiantes
Endpoint: GET /estudiantes
Descripción: Recupera una lista de todos los estudiantes.
Respuesta exitosa: 200 OK con la lista de estudiantes.
c. Obtener estudiante por ID
Endpoint: GET /estudiantes/:id
Descripción: Recupera los detalles de un estudiante por su ID.
Respuesta exitosa: 200 OK con los detalles del estudiante.
d. Actualizar estudiante
Endpoint: PUT /estudiantes/:id
Descripción: Permite actualizar la información de un estudiante.
Respuesta exitosa: 200 OK con los detalles del estudiante actualizado.
e. Eliminar estudiante
Endpoint: DELETE /estudiantes/:id
Descripción: Elimina un estudiante de la base de datos.
Respuesta exitosa: 200 OK con un mensaje de confirmación.
3. Solicitudes
a. Crear solicitud
Endpoint: POST /solicitudes
Descripción: Crea una nueva solicitud de un estudiante a una universidad.
Respuesta exitosa: 201 Created con los detalles de la solicitud.
b. Obtener todas las solicitudes
Endpoint: GET /solicitudes
Descripción: Recupera todas las solicitudes realizadas.
Respuesta exitosa: 200 OK con la lista de solicitudes.
c. Cambiar el estado de la solicitud
Endpoint: PUT /solicitudes/:id
Descripción: Permite cambiar el estado de la solicitud (pendiente, aceptada, rechazada).
Respuesta exitosa: 200 OK con los detalles de la solicitud actualizada.
4. Universidades
a. Crear universidad
Endpoint: POST /universidades
Descripción: Permite crear una nueva universidad.
Respuesta exitosa: 201 Created con los detalles de la universidad.
b. Obtener todas las universidades
Endpoint: GET /universidades
Descripción: Recupera una lista de todas las universidades.
Respuesta exitosa: 200 OK con la lista de universidades.
5. Middleware de autenticación (JWT)
Este middleware se utiliza para proteger las rutas que requieren autenticación. El token JWT debe ser enviado en el encabezado Authorization de las solicitudes. Si el token es válido, el usuario será autorizado a acceder a la ruta.

Rutas Protegidas
Algunas rutas como la actualización del estado de las solicitudes requieren un token JWT válido. Si el token no está presente o es inválido, se devolverá un error 401 Unauthorized.