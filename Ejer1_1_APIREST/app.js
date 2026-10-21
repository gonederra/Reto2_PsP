const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola! El restaurante está abierto');
});

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



app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});