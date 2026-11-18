const express = require('express');
const fs = require('fs');
const pc = require('picocolors');

const app = express();
const port = 3000;

// Importamos los dos ficheros JSON
const productos = require('./DATOS_API/productos.json');
const categorias = require('./DATOS_API/categorias.json');

// Permitir recibir datos en formato JSON en el body
app.use(express.json());

// Middleware: Logger en consola con colores para ver las peticiones
app.use((req, res, next) => {
  res.on('finish', () => {
    const status = res.statusCode;
    
    // Asignamos color al estado HTTP
    const statusColor = status < 400 ? pc.green(status) : pc.red(status);
    const metodo = pc.bold(pc.cyan(req.method));
    const url = pc.white(req.url);

    console.log(`[${metodo}] ${url} -> Estado: ${statusColor}`);
  });

  next();
});

// ============================================================
// 1. ENDPOINTS DE PRODUCTOS (Fichero: productos.json)
// ============================================================

// GET /api/productos -> Obtener todos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// GET /api/productos/:id -> Obtener uno por ID
app.get('/api/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json(producto);
});

// POST /api/productos -> Crear un producto nuevo
app.post('/api/productos', (req, res) => {
  const nuevoProducto = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio,
    categoriaId: req.body.categoriaId
  };

  productos.push(nuevoProducto);

  // Guardamos los cambios en el archivo productos.json
  fs.writeFileSync('./DATOS_API/productos.json', JSON.stringify(productos, null, 2));

  res.status(201).json(nuevoProducto);
});

// PUT /api/productos/:id -> Modificar un producto
app.put('/api/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = productos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  // Actualizamos el objeto en la posición del array
  productos[index] = {
    id: id,
    nombre: req.body.nombre || productos[index].nombre,
    precio: req.body.precio || productos[index].precio,
    categoriaId: req.body.categoriaId || productos[index].categoriaId
  };

  // Guardamos cambios en el archivo productos.json
  fs.writeFileSync('./DATOS_API/productos.json', JSON.stringify(productos, null, 2));

  res.json(productos[index]);
});

// DELETE /api/productos/:id -> Eliminar un producto
app.delete('/api/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = productos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  productos.splice(index, 1);

  // Guardamos los cambios en el archivo productos.json
  fs.writeFileSync('./DATOS_API/productos.json', JSON.stringify(productos, null, 2));

  res.json({ mensaje: 'Producto eliminado correctamente' });
});


// ============================================================
// 2. ENDPOINTS DE CATEGORÍAS (Fichero: categorias.json)
// ============================================================

// GET /api/categorias -> Obtener todas
app.get('/api/categorias', (req, res) => {
  res.json(categorias);
});

// GET /api/categorias/:id -> Obtener una por ID
app.get('/api/categorias/:id', (req, res) => {
  const id = Number(req.params.id);
  const categoria = categorias.find(c => c.id === id);

  if (!categoria) {
    return res.status(404).json({ error: 'Categoría no encontrada' });
  }

  res.json(categoria);
});

// POST /api/categorias -> Crear una categoría nueva
app.post('/api/categorias', (req, res) => {
  const nuevaCategoria = {
    id: categorias.length + 1,
    nombre: req.body.nombre
  };

  categorias.push(nuevaCategoria);

  // Guardamos los cambios en el archivo categorias.json
  fs.writeFileSync('./DATOS_API/categorias.json', JSON.stringify(categorias, null, 2));

  res.status(201).json(nuevaCategoria);
});

// PUT /api/categorias/:id -> Modificar una categoría
app.put('/api/categorias/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = categorias.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Categoría no encontrada' });
  }

  categorias[index] = {
    id: id,
    nombre: req.body.nombre || categorias[index].nombre
  };

  // Guardamos cambios en el archivo categorias.json
  fs.writeFileSync('./DATOS_API/categorias.json', JSON.stringify(categorias, null, 2));

  res.json(categorias[index]);
});

// DELETE /api/categorias/:id -> Eliminar una categoría
app.delete('/api/categorias/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = categorias.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Categoría no encontrada' });
  }

  categorias.splice(index, 1);

  // Guardamos los cambios en el archivo categorias.json
  fs.writeFileSync('./DATOS_API/categorias.json', JSON.stringify(categorias, null, 2));

  res.json({ mensaje: 'Categoría eliminada correctamente' });
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(pc.green(`Servidor listo escuchando en http://localhost:${port}`));
});