// ============================================================
// PUT.js  ->  PUT: EDITAMOS datos
// ============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');

// Importamos los JSON con los que vamos a trabajar
const clientes = require('./DATOS_API/clientes.json')
const pedidos = require('./DATOS_API/pedidos.json')

const app = express();
const port = 3000;

//* OBLIGATORIO para POST! Permite leer JSON en el cuerpo de las peticiones
app.use(express.json());

//! PARA HACER POSTS MÁS FACILMENTE INSTALAMOS REST CLIENT

// ---------- CLIENTES ----------

// ------------ GET -------------

// GET /api/clientes  -> lista completa
app.get('/api/clientes', (req, res) => {
  res.json(clientes);
});


// GET /api/clientes/id -> ID Concreto
app.get('/api/clientes/:id', (req, res) => {
  const id = Number(req.params.id);
  const cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({ error: 'Cliente no encontrado' });
  }
  
  res.json(cliente);
});

// ------------ POST -------------

// POST /api/clientes  -> crear un cliente nuevo
app.post('/api/clientes', (req, res) => {
  // Creamos el nuevo objeto con los datos que mandes y un ID automático
  const nuevoCliente = {
    id: clientes.length + 1,
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono
  };

  // Lo añadimos al array en memoria
  clientes.push(nuevoCliente);

  //? LO AÑADIMOS AL ARCHIVO
  fs.writeFileSync('./DATOS_API/clientes.json', JSON.stringify(clientes, null, 2));

  // Respondemos indicando que se ha creado correctamente (código 201)
  res.status(201).json(nuevoCliente);
});

// ------------ PUT -------------

// PUT /api/clientes/:id  -> actualizar un cliente existente
app.put('/api/clientes/:id', (req, res) => {
  const id = Number(req.params.id);

  // 1. Buscamos el índice (la posición) del cliente en el array
  const index = clientes.findIndex(c => c.id === id);

  // Si no existe, devolvemos un 404
  if (index === -1) {
    return res.status(404).json({ error: 'Cliente no encontrado' });
  }

  // 2. Actualizamos los datos 
  // (mantenemos el ID que ya tenía, y actualizamos nombre/email con lo que llegue en req.body)
  clientes[index] = {
    id: id,
    nombre: req.body.nombre || clientes[index].nombre,
    email: req.body.email || clientes[index].email,
    telefono: req.body.telefono || clientes[index].telefono
  };

  // 3. Guardamos los cambios directamente en el archivo JSON
  fs.writeFileSync('./DATOS_API/clientes.json', JSON.stringify(clientes, null, 2));

  // 4. Respondemos con el cliente ya modificado
  res.json(clientes[index]);
});

//TODO CON PEDIDOS

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Servidor GET escuchando en http://localhost:${port}`);
});