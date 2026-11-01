# API REST de ejemplo - Comercial Vidriera S.L.

API mínima en Node.js **sin dependencias** para las prácticas de las sesiones 1 a 4.

## Arrancarla
```
node server.js
```
Por defecto escucha en `0.0.0.0:8080`. Se cambia con variables de entorno:
```
API_PORT=3000 API_HOST=127.0.0.1 node server.js
```

## Rutas
| Verbo | Ruta | Respuesta |
|-------|------|-----------|
| GET | `/api/v1/health` | 200 con el estado y si el puerto de la BD responde |
| GET | `/api/v1/clientes` | 200 con la lista de clientes |
| GET | `/api/v1/clientes/1` | 200 con un cliente (404 si no existe) |
| POST | `/api/v1/clientes` | 201 al crear (cuerpo JSON `{"nombre":"..."}`) |
| GET | `/api/v1/error` | 500 a propósito, para practicar el diagnóstico |
| cualquier otra | | 404 |

## Probarla
```
curl -i http://localhost:8080/api/v1/health
curl -i http://localhost:8080/api/v1/clientes
curl -i -X POST http://localhost:8080/api/v1/clientes \
  -H "Content-Type: application/json" -d '{"nombre":"Vidriera S.L."}'
```

## Como servicio (sesión 2)
```
sudo mkdir -p /opt/api && sudo cp server.js /opt/api/
sudo useradd --system --no-create-home apiuser
```
En el `.service`: `ExecStart=/usr/bin/node /opt/api/server.js` (comprueba la ruta con `which node`).

## Notas
- Los clientes están en memoria: se pierden al reiniciar la API.
- El campo `bd` de `/health` solo comprueba si responde el puerto `DB_HOST:DB_PORT` (por defecto `localhost:5432`). La API funciona igual sin base de datos.
- Todos los mensajes salen por la salida estándar, por lo que `journalctl -u api-rest` los muestra.
