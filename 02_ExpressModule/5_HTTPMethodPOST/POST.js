const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Función auxiliar: lee un JSON de la carpeta DATOS_API
function leerJSON(nombreFichero) {
  const ruta = path.join(__dirname, 'DATOS_API', nombreFichero);
  return JSON.parse(fs.readFileSync(ruta, 'utf-8'));
}

// POST /api/clientes
app.post('/api/clientes', (req, res) => {
  const clientes = leerJSON('clientes.json');

  const nuevo = req.body;
  nuevo.id = clientes.length + 1;

  clientes.push(nuevo);
  fs.writeFileSync('./DATOS_API/clientes.json', JSON.stringify(clientes, null, 2));

  res.status(201).json(nuevo);
});

// POST /api/pedidos
app.post('/api/pedidos', (req, res) => {
  const pedidos = leerJSON('pedidos.json');

  const nuevo = req.body;
  nuevo.id = pedidos.length + 1;
  nuevo.estado = 'pendiente';

  pedidos.push(nuevo);
  fs.writeFileSync('./DATOS_API/pedidos.json', JSON.stringify(pedidos, null, 2));

  res.status(201).json(nuevo);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});