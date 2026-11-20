# Ejercicio de Clase: API REST de Incidencias y Clientes para HelpDeskFX

**Objetivo:** Desarrollar una API REST sencilla con dos recursos diferentes (`incidencias` y `clientes`), aprendiendo a implementar persistencia en ficheros JSON independientes y colorear las peticiones en consola con `picocolors`. Esta API sustituirá al simulador para que el cliente **HelpDeskFX** (Interfaces) pueda conectarse a ella.

---

## 📁 Archivos de Datos Iniciales (`DATOS_API/`)

Crea la carpeta `DATOS_API` y dentro añade los siguientes dos archivos:

### 1. `DATOS_API/incidencias.json`
```json
[
  {
    "codigo": "H001",
    "titulo": "Fuga de aceite",
    "prioridad": "Alta",
    "fecha": "2026-10-31T00:00:00",
    "descripcion": "Se observa aceite bajo la máquina al iniciar el turno.",
    "estado": "Pendiente"
  },
  {
    "codigo": "H002",
    "titulo": "Pantalla parpadeante",
    "prioridad": "Media",
    "fecha": "2026-11-02T00:00:00",
    "descripcion": "El monitor del puesto 3 parpadea de forma intermitente.",
    "estado": "Pendiente"
  },
  {
    "codigo": "H003",
    "titulo": "Luz fundida en pasillo",
    "prioridad": "Baja",
    "fecha": "2026-11-03T00:00:00",
    "descripcion": "Hay un fluorescente fundido en el pasillo de la zona B.",
    "estado": "Pendiente"
  }
]
```

### 2. `DATOS_API/clientes.json`
```json
[
  {
    "id": 1,
    "nombre": "Ane Etxeberria",
    "email": "ane@ejemplo.com",
    "telefono": "600111222"
  },
  {
    "id": 2,
    "nombre": "Mikel Goikoetxea",
    "email": "mikel@ejemplo.com",
    "telefono": "600333444"
  }
]
```

---

## 📋 Requisitos de la API

1. **Servidor y Logger de Consola:**
   * Arrancar el servidor Express en el puerto **`5082`** (es la dirección que espera el cliente: `http://127.0.0.1:5082/`).
   * Habilitar la lectura de JSON (`express.json()`).
   * Usar un middleware global con `picocolors` que muestre por consola el método HTTP, la URL y el código de estado devuelto (en verde si es un `2xx` y en rojo si es un `4xx`).

2. **Endpoints para `Incidencias`:**
   * `GET /api/incidencias`: Lista todas las incidencias y devuelve `200 OK` con un array JSON.
   * `GET /api/incidencias/:codigo`: Devuelve una incidencia por su **código** (por ejemplo `H001`), no por un número. Responde `404` si no existe.
   * `POST /api/incidencias`: Crea una nueva incidencia, la añade al array, la guarda en `incidencias.json` y devuelve `201 Created` con el objeto creado.

3. **Reglas del `POST` de incidencias:**
   * El cliente envía `Content-Type: application/json` y un cuerpo con **`titulo`**, **`prioridad`**, **`fecha`** y **`descripcion`**.
   * El **servidor** asigna dos campos:
     * `codigo`: la letra `H` seguida de un número de 3 cifras. A partir de las muestras, el primer código nuevo es `H004`, luego `H005`, etc.
     * `estado`: siempre `"Pendiente"` en el alta.
   * La `fecha` se guarda **tal cual llega**. No la conviertas con `new Date()`, porque podrías cambiar el día por la zona horaria.
   * La respuesta debe tener los mismos campos que el `GET`, en este orden: `codigo`, `titulo`, `prioridad`, `fecha`, `descripcion`, `estado`.

   Ejemplo de petición:
   ```json
   {
     "titulo": "Impresora atascada",
     "prioridad": "Media",
     "fecha": "2026-11-05T00:00:00",
     "descripcion": "La impresora de la planta 1 se atasca con cada hoja."
   }
   ```

   Ejemplo de respuesta (`201 Created`):
   ```json
   {
     "codigo": "H004",
     "titulo": "Impresora atascada",
     "prioridad": "Media",
     "fecha": "2026-11-05T00:00:00",
     "descripcion": "La impresora de la planta 1 se atasca con cada hoja.",
     "estado": "Pendiente"
   }
   ```

4. **Endpoints para `Clientes` (CRUD Completo):**
   * `GET /api/clientes`: Lista todos los clientes.
   * `GET /api/clientes/:id`: Devuelve un cliente por su ID (`404` si no existe).
   * `POST /api/clientes`: Crea un nuevo cliente (con `nombre`, `email` y `telefono`), lo añade al array, lo guarda en `clientes.json` y devuelve `201 Created`.
   * `PUT /api/clientes/:id`: Actualiza un cliente y guarda en `clientes.json` (`404` si no existe).
   * `DELETE /api/clientes/:id`: Elimina un cliente y guarda en `clientes.json` (`404` si no existe).

5. **Fuera del alcance de este ejercicio:**
   * No hace falta validar los campos (longitudes, prioridades válidas, campos obligatorios).
   * No hace falta controlar títulos duplicados, por lo que no se usan los códigos `400` ni `409`.
   * El cliente solo funcionará correctamente si envía datos válidos.

> 💡 **Pista:** para construir el código de las incidencias puedes usar `'H' + String(numero).padStart(3, '0')`.

> 🔄 **Para reiniciar los datos:** como las altas se guardan en los ficheros JSON, para volver al estado inicial basta con restaurar `incidencias.json` (solo `H001`, `H002` y `H003`) y `clientes.json` (solo los clientes 1 y 2) y reiniciar el servidor.
