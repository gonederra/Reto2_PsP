# Ejercicios: Introducción a Node.js

**Asignatura:** Programación de Servicios y Procesos  
**Bloque:** 00 · Fundamentos de Node.js  
**Modalidad:** En parejas  
**Módulos trabajados:** `os`, `fs` (y `path`) · Librería externa: `picocolors`  

---

## 1. Objetivo

Practicar los fundamentos vistos en clase construyendo tres pequeñas aplicaciones de consola. Al terminar, deberías ser capaz de:

- Obtener información del sistema con el módulo nativo **`os`**.  
- Leer, escribir y explorar archivos y carpetas con el módulo nativo **`fs`**.  
- Instalar y usar una dependencia externa (**`picocolors`**) con **npm**.  
- Gestionar argumentos de línea de comandos (`process.argv`) y errores básicos.  
- Organizar un proyecto y publicarlo en **GitHub**.  

---

## 2. Preparación del repositorio

Cada pareja creará **un único repositorio público** en GitHub (lo crea uno de los dos integrantes) llamado:

```
ejercicios-introduccion-nodejs
```

Dentro habrá **una carpeta por ejercicio**, cada una con su propio proyecto Node.js:

```
ejercicios-introduccion-nodejs/
├── .gitignore
├── README.md
├── ejercicio1-informe-sistema/
│   ├── package.json
│   └── sistema.js
├── ejercicio2-explorador-carpetas/
│   ├── package.json
│   └── listar.js
└── ejercicio3-informe-archivo/
    ├── package.json
    └── informe.js
```

### Pasos para cada ejercicio

```bash
cd ejercicio1-informe-sistema
npm init -y
npm install picocolors
node sistema.js
```

> **Importante:** usa el mismo sistema de módulos que hemos empleado en clase (`require` o `import`) y mantenlo en los tres ejercicios.

### Trabajo en pareja

- El integrante que crea el repositorio debe añadir a su compañero/a como **colaborador** (*Settings → Collaborators*).
- Repartid el trabajo de forma equilibrada: **ambos** debéis hacer commits y entender todo el código entregado.
- Antes de empezar a trabajar, haced `git pull` para evitar conflictos.

### Archivo `.gitignore` (en la raíz)

No subas nunca la carpeta `node_modules`. Crea un `.gitignore` con este contenido:

```
node_modules/
*.log
informe.txt
```

### README del repositorio

Tu `README.md` debe incluir, como mínimo:

- Nombre y grupo de **los dos integrantes** de la pareja.
- Una breve descripción de cada ejercicio.
- Cómo instalar y ejecutar cada uno (`npm install` y `node archivo.js`).
- Capturas de pantalla de la salida de cada programa.

---

## 3. Ejercicios

### Ejercicio 1 · Informe del sistema (`os` + `picocolors`)

**Carpeta:** `ejercicio1-informe-sistema` · **Archivo:** `sistema.js`

Crea un programa que muestre por consola un informe con:

| Dato | Descripción |
|---|---|
| Equipo | Nombre del equipo (hostname) |
| Sistema | Sistema operativo, versión y arquitectura |
| Usuario | Usuario actual |
| Procesador | Modelo y número de CPUs |
| Memoria | Total, libre y **porcentaje usado** |
| Tiempo activo | `uptime` con formato `Xh Ym` |

**Requisitos de presentación con picocolors:**

- Los títulos van en **negrita y cian**.
- Las etiquetas van en gris (`pc.dim`) y los valores en blanco o verde.
- El porcentaje de memoria usada cambia de color según su valor:
  - 🟢 Verde: menos del 60 %
  - 🟡 Amarillo: entre 60 % y 85 %
  - 🔴 Rojo: más del 85 %

**Pistas:**

- `os.totalmem()` y `os.freemem()` devuelven **bytes**. Crea una función `formatearBytes()` para convertirlos a GB.
- Separa la lógica en funciones pequeñas: `formatearUptime()`, `colorearPorcentaje()`, etc.

---

### Ejercicio 2 · Explorador de carpetas (`fs` + `picocolors`)

**Carpeta:** `ejercicio2-explorador-carpetas` · **Archivo:** `listar.js`

Crea un programa que reciba una ruta como argumento y muestre su contenido:

```bash
node listar.js ./mi-carpeta
node listar.js            # sin argumento: usa la carpeta actual
```

**Requisitos:**

- Las **carpetas** se muestran en azul y con una `/` al final.
- Los **archivos** se muestran en verde, con su tamaño en gris.
- Los archivos **ocultos** (que empiezan por `.`) se muestran en gris.
- Al final, un resumen, por ejemplo: `3 carpetas, 12 archivos, 45.2 KB en total`.
- Si la ruta **no existe**, muestra un mensaje de error con fondo rojo (`pc.bgRed`) y finaliza con `process.exit(1)`.

**Pistas:**

- `fs.readdirSync(ruta, { withFileTypes: true })` devuelve objetos con el método `isDirectory()`.
- `fs.statSync(ruta).size` devuelve el tamaño en bytes.
- Usa `path.join()` para construir rutas de forma segura.

---

### Ejercicio 3 · Informe a archivo con historial (`os` + `fs` + `picocolors`)

**Carpeta:** `ejercicio3-informe-archivo` · **Archivo:** `informe.js`

Amplía el ejercicio 1 para que, además de mostrar el informe por pantalla, lo **guarde en disco**:

| Archivo | Comportamiento | Función de `fs` |
|---|---|---|
| `informe.txt` | Se **sobrescribe** en cada ejecución con el informe actual | `writeFileSync` |
| `historial.log` | Se **añade** una línea por ejecución | `appendFileSync` |

Formato de cada línea del historial:

```
2026-11-01 10:32:15 | RAM usada: 62%
```

Al terminar, muestra en verde: `✔ Informe guardado en informe.txt`.

> ⚠️ **Atención:** `picocolors` añade códigos especiales de color al texto. Si guardas el texto coloreado en el archivo, verás caracteres extraños (`\x1b[32m...`). Construye primero el texto **plano**, guárdalo en el archivo y aplica los colores **solo** al mostrarlo por consola.

---

### Ejercicio extra (opcional) · Organizador de archivos

**Carpeta:** `ejercicio4-organizador` · **Archivo:** `organizar.js`

Programa que reciba una carpeta y clasifique sus archivos en subcarpetas según su extensión (`imagenes/`, `documentos/`, `otros/`…).

- Crea las subcarpetas si no existen (`fs.mkdirSync` con `{ recursive: true }`).
- Muestra cada movimiento: `foto.jpg → imagenes/` (origen en amarillo, destino en verde).
- Incluye un modo simulación con `--dry-run` que solo muestra lo que haría, sin mover nada.
- Termina con un resumen de archivos por categoría.

---

## 4. Normas de entrega

1. El repositorio debe ser **público**.
2. Debe contener **las tres carpetas** (más la cuarta si haces el extra) con la estructura indicada.
3. **No** debe incluirse `node_modules`.
4. Cada ejercicio debe ejecutarse correctamente con `npm install` seguido de `node <archivo>.js`.
5. Realizad **al menos un commit por ejercicio**, con commits de **ambos integrantes**, y con mensajes descriptivos. Ejemplos:
   - ✅ `Añade informe del sistema con colores según uso de memoria`
   - ❌ `cambios`, `asdf`, `subida final`
6. Entregad **únicamente el enlace** al repositorio (uno por pareja), con este formato:

```
https://github.com/<usuario>/ejercicios-introduccion-nodejs
```

---

## 5. Lista de comprobación antes de entregar

- [ ] El repositorio es público y el enlace funciona sin iniciar sesión.
- [ ] Existen las tres carpetas, cada una con su `package.json`.
- [ ] `node_modules` no está subido.
- [ ] Cada ejercicio se ejecuta sin errores en una carpeta limpia (`npm install` + `node ...`).
- [ ] El README incluye instrucciones y capturas de pantalla.
- [ ] Los commits tienen mensajes descriptivos y hay commits de los dos integrantes.
- [ ] Los dos integrantes figuran en el README.

---

## 6. Recursos útiles

- Documentación del módulo [`os`](https://nodejs.org/api/os.html)
- Documentación del módulo [`fs`](https://nodejs.org/api/fs.html)
- Documentación del módulo [`path`](https://nodejs.org/api/path.html)
- [picocolors en npm](https://www.npmjs.com/package/picocolors)
- [Guía de Git y GitHub](https://docs.github.com/es/get-started)

¡Mucho ánimo! Recuerda: es mejor un programa sencillo que funciona que uno complicado que falla.
