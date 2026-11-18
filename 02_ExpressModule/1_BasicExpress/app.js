// Importamos el módulo Express
const express = require('express');

// Creamos una aplicación Express
const app = express();

// Definimos el puerto donde escuchará el servidor
const port = 3000;

// Definimos una ruta principal ("/")
// Cuando alguien accede a http://localhost:3000
// el servidor responde con un mensaje de texto
app.get('/', (req, res) => {
  res.send("¡Servidor funcionando correctamente con Express!");
});

// la última a la que va a llegar
// use significa que se hará para todas las acciones sean GET, POST, PUT, etc.
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});