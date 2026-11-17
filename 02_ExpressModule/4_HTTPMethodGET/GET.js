// ============================================================
// GET.js  ->  GET: LEER datos (no modifica nada)
// ============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Carpeta donde están los JSON: ./DATOS_API (junto a este fichero)
const CARPETA_DATOS = path.join(__dirname, 'DATOS_API');

// Función auxiliar: lee un fichero JSON y lo convierte en array de JavaScript
function leerJSON(nombreFichero) {
  const ruta = path.join(CARPETA_DATOS, nombreFichero);
  const texto = fs.readFileSync(ruta, 'utf-8');
  return JSON.parse(texto);
}

// ---------- CLIENTES ----------

// GET /api/clientes  -> lista completa
app.get('/api/clientes', (req, res) => {
  const clientes = leerJSON('clientes.json');
  res.json(clientes);
});

// GET /api/clientes/:id  -> un cliente concreto
app.get('/api/clientes/:id', (req, res) => {
  const id = Number(req.params.id);
  const cliente = leerJSON('clientes.json').find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({ error: 'Cliente no encontrado' });
  }
  res.json(cliente);
});

// ---------- PEDIDOS ----------

// GET /api/pedidos  -> lista completa
// Admite filtro opcional por query string: /api/pedidos?estado=pendiente
app.get('/api/pedidos', (req, res) => {
  let pedidos = leerJSON('pedidos.json');

  if (req.query.estado) {
    pedidos = pedidos.filter(p => p.estado === req.query.estado);
  }
  res.json(pedidos);
});

// GET /api/pedidos/:id  -> un pedido concreto
app.get('/api/pedidos/:id', (req, res) => {
  const id = Number(req.params.id);
  const pedido = leerJSON('pedidos.json').find(p => p.id === id);

  if (!pedido) {
    return res.status(404).json({ error: 'Pedido no encontrado' });
  }
  res.json(pedido);
});

app.listen(port, () => {
  console.log(`Servidor GET escuchando en http://localhost:${port}`);
});