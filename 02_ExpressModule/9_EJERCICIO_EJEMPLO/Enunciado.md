# Ejercicio de Clase: API REST Multi-recurso de Productos y Categorías

**Objetivo:** Desarrollar una API REST sencilla con dos recursos diferentes, aprendiendo a implementar persistencia en ficheros JSON independientes y colorear las peticiones en consola con `picocolors`.

---

## 📁 Archivos de Datos Iniciales (`DATOS_API/`)

Crea la carpeta `DATOS_API` y dentro añade los siguientes dos archivos:

### 1. `DATOS_API/productos.json`
```json
[
  {
    "id": 1,
    "nombre": "Teclado Mecánico",
    "precio": 49.99,
    "categoriaId": 1
  },
  {
    "id": 2,
    "nombre": "Monitor 24 pulgadas",
    "precio": 129.50,
    "categoriaId": 2
  }
]
```

### 2. `DATOS_API/categorias.json`
```json
[
  {
    "id": 1,
    "nombre": "Periféricos"
  },
  {
    "id": 2,
    "nombre": "Pantallas"
  }
]
```

---

## 📋 Requisitos de la API

1. **Servidor y Logger de Consola:**
   * Arrancar el servidor Express en el puerto `3000`.
   * Habilitar la lectura de JSON (`express.json()`).
   * Usar un middleware global con `picocolors` que muestre por consola el método HTTP, la URL y el código de estado devuelto (en verde si es un `2xx` y en rojo si es un `4xx`).

2. **Endpoints para `Productos` (CRUD Completo):**
   * `GET /api/productos`: Lista todos los productos.
   * `GET /api/productos/:id`: Devuelve un producto por su ID (`404` si no existe).
   * `POST /api/productos`: Crea un nuevo producto, lo añade al array, lo guarda en `productos.json` y devuelve `201 Created`.
   * `PUT /api/productos/:id`: Actualiza un producto y guarda en `productos.json`.
   * `DELETE /api/productos/:id`: Elimina un producto y guarda en `productos.json`.

3. **Endpoints para `Categorías` (CRUD Completo):**
   * `GET /api/categorias`: Lista todas las categorías.
   * `GET /api/categorias/:id`: Devuelve una categoría por ID (`404` si no existe).
   * `POST /api/categorias`: Crea una categoría, la añade al array, la guarda en `categorias.json` y devuelve `201 Created`.
   * `PUT /api/categorias/:id`: Actualiza una categoría y guarda en `categorias.json`.
   * `DELETE /api/categorias/:id`: Elimina una categoría y guarda en `categorias.json`.