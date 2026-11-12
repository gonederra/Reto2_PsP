# Ejercicio: Mi primera API HTTP con Node.js

## Objetivo

Crear un servidor HTTP con **Node.js puro** (sin Express ni frameworks) que simule una pequeña API de **clientes** y **pedidos**, y que muestre por consola, con colores, todo lo que ocurre en cada petición.

Con este ejercicio practicarás:

- El módulo nativo `node:http`
- El objeto `req` (qué nos pide el cliente) y `res` (qué le respondemos)
- La importancia de los **headers** (`Content-Type` y `charset`)
- Los **códigos de estado** (`200`, `404`)
- Logs con colores usando `picocolors`

---

## 1. Preparación

```bash
mkdir api-http-node
cd api-http-node
npm init -y
npm install picocolors
```

Crea un archivo `server.js`. Todo el ejercicio se hace ahí.

---

## 2. Rutas que debe tener tu servidor

| Ruta | Qué devuelve | `Content-Type` |
|------|--------------|----------------|
| `/` | Página de bienvenida en **HTML** | `text/html; charset=utf-8` |
| `/api` | Página **HTML** con la lista de accesos a las secciones de la API | `text/html; charset=utf-8` |
| `/clientes` | Lista de clientes con **formato de JSON**, pero como texto plano | `text/plain; charset=utf-8` |
| `/pedidos` | Lista de pedidos con **formato de JSON**, pero como texto plano | `text/plain; charset=utf-8` |
| Cualquier otra | `Error 404` + `Page not found` | `text/plain; charset=utf-8` |

### 2.1 Ruta `/` (bienvenida)

Devuelve una página HTML de bienvenida. Debe tener, como mínimo:

- Un título `<h1>` de bienvenida.
- Un párrafo `<p>` explicando qué es esta API.
- Un enlace `<a>` que lleve a `/api`.

### 2.2 Ruta `/api` (índice de la API)

Devuelve una página HTML que muestre las distintas secciones de la API usando **distintos niveles de encabezado**. Por ejemplo:

- `<h1>` para el título general de la API.
- `<h2>` para cada sección (`Clientes`, `Pedidos`).
- `<h3>` para una pequeña descripción o subapartado de cada sección.
- Enlaces `<a>` que lleven a `/clientes` y `/pedidos`.

> Piensa: ¿qué pasa si el navegador no sabe que le estás mandando HTML? Pruébalo cambiando el `Content-Type` a `text/plain` y fíjate en el resultado.

### 2.3 Ruta `/clientes`

Devuelve **en texto plano** los clientes, con aspecto de JSON (un array de objetos).

⚠️ **Los datos deben ser exactamente los mismos que los de la API de SI.**

### 2.4 Ruta `/pedidos`

Devuelve **en texto plano** los pedidos, con aspecto de JSON.

⚠️ **Mismos datos que los de la API de SI.**

Ejemplo de la **estructura** (sustituye por los datos reales de SI):

### 2.5 Cualquier otra ruta

- Código de estado: `404`
- Cuerpo de la respuesta:

```
Error 404
Page not found
```

---

## 3. Lo que debe mostrar el backend (consola)

Por cada petición, tu servidor debe imprimir tres bloques, **con estos colores**:

### 3.1 Al arrancar

Mostrar el puerto en el que escucha el servidor, en **amarillo**:

```
Server listening on port 3000
```

### 3.2 Por cada petición: bloque `REQUEST`

Cabecera y datos del request, **todo en amarillo y negrita**:

```
------- REQUEST -----
Request URL: /clientes
Request Method: GET
```

### 3.3 Por cada petición: bloque `RESPONSE`

Cabecera y datos de lo que enviamos al cliente:

- Si respondemos **200 OK** → el estado se muestra en **verde**.
- Si respondemos **404** → el error se muestra en **rojo**.

Ejemplo con éxito:

```
------- RESPONSE -----
Response sent: clientes
Status code sent: 200
```

Ejemplo con error:

```
------- RESPONSE -----
Response sent: Error 404
Status code sent: 404
```

---

## 4. Pistas

- El módulo `http` se importa con `require('node:http')` y se usa `http.createServer(callback)`.
- El `callback` recibe `(req, res)`. Te interesan `req.url` y `req.method`.
- Los headers se ponen con `res.setHeader('Content-Type', '...')`.
- El código de estado se cambia con `res.statusCode = 404` (por defecto es `200`).
- La respuesta se envía y se cierra con `res.end('...')`.
- Para convertir un array de JavaScript en texto con formato JSON: `JSON.stringify(datos, null, 2)`.
- `picocolors` se usa así: `pc.yellow('texto')`, `pc.green('texto')`, `pc.red('texto')`, `pc.bold('texto')`. Se pueden **anidar**: `pc.bold(pc.yellow('texto'))`.
- Para no repetir código, plantéate crear funciones auxiliares: por ejemplo `logRequest(req)` y `logResponse(mensaje, res)`.

---

## 5. Cómo probarlo

1. Arranca el servidor:

   ```bash
   node server.js
   ```

2. Abre en el navegador y comprueba cada ruta:

   - http://localhost:3000/
   - http://localhost:3000/api
   - http://localhost:3000/clientes
   - http://localhost:3000/pedidos
   - http://localhost:3000/cualquier-cosa → debe dar 404

3. Mira la consola después de cada visita. ¿Aparecen los bloques `REQUEST` y `RESPONSE` con sus colores?

> 💡 El navegador suele pedir también `/favicon.ico` automáticamente. Si ves una petición extra que acaba en 404 en tu consola, ¡es normal!

---

## 6. Checklist de entrega

- [ ] El servidor arranca y muestra el puerto en amarillo.
- [ ] `/` devuelve HTML de bienvenida con acentos bien codificados.
- [ ] `/api` devuelve HTML con varios niveles de encabezado y enlaces a `/clientes` y `/pedidos`.
- [ ] `/clientes` devuelve los datos de SI como texto plano con formato JSON.
- [ ] `/pedidos` devuelve los datos de SI como texto plano con formato JSON.
- [ ] Cualquier otra ruta devuelve 404.
- [ ] Cada petición imprime el bloque `REQUEST` en amarillo negrita.
- [ ] Cada petición imprime el bloque `RESPONSE`: 200 en verde, 404 en rojo.
- [ ] Todo el código está comentado explicando qué hace cada parte.

---

## 7. Bonus (opcional)

- Muestra también la fecha y hora de cada petición en el log.
- Añade la ruta `/clientes/1` que devuelva solo el cliente con `id` 1 (y 404 si no existe).
- Haz que el puerto se pueda cambiar con una variable de entorno (`process.env.PORT`).
- Extrae los datos de clientes y pedidos a un archivo aparte (`datos.js`) y impórtalos con `require`.
