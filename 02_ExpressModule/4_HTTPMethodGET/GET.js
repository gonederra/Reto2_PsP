// ============================================================
// GET.js  ->  GET: LEER datos (no modifica nada)
// ============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');

// Importamos los JSON con los que vamos a trabajar
const clientes = require('./DATOS_API/clientes.json')
const pedidos = require('./DATOS_API/pedidos.json')

const app = express();
const port = 3000;



// ---------- CLIENTES ----------

// GET /api/clientes  -> lista completa
app.get('/api/clientes', (req, res) => {
  res.json(clientes);
});

// GET /api/clientes/:id  -> un cliente concreto
app.get('/api/clientes/:id', (req, res) => {
  const id = Number(req.params.id);
  const cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({ error: 'Cliente no encontrado' });
  }
  
  res.json(cliente);
});

// ---------- PEDIDOS ----------

// GET /api/pedidos  -> lista completa
// Admite filtro opcional por query string: /api/pedidos?estado=pendiente
app.get('/api/pedidos', (req, res) => {
  res.json(pedidos);
});

// GET /api/pedidos/:id  -> un pedido concreto
app.get('/api/pedidos/:id', (req, res) => {
  const id = Number(req.params.id);
  const pedido = pedidos.find(c => c.id === id);

  if (!pedido) {
    return res.status(404).json({ error: 'Pedido no encontrado' });
  }
  res.json(pedido);
});

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Servidor GET escuchando en http://localhost:${port}`);
});