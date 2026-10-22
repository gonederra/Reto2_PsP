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

// Creacion de los pedidos de ejemplo
const pedidos = [
  { id: 1, mesa: 4, platos: ['paella', 'agua'], estado: 'pendiente' },
  { id: 2, mesa: 7, platos: ['tortilla'], estado: 'servido' }
];

//Endpoint para obtener todos los pedidos
app.get('/api/pedidos', (req, res) => {
  res.json(pedidos);
});

//Endpoint para obtener un pedido por su ID
/*
app.get('/api/pedidos/:id', (req, res) => {
  const id = Number(req.params.id);
  const pedido = pedidos.find(p => p.id === id);

  if (!pedido) {
    return res.status(404).json({ error: 'Pedido no encontrado' });
  }
  res.json(pedido);
});
*/

// Iniciamos el servidor
app.listen(port, () => {
  console.log('Servidor escuchando en http://localhost:${port}');
});