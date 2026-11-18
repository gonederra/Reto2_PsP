import express from "express";
const app = express();
const port = 3000;

// GET --> Leer datos
app.get("/", (req, res) => {
  res.status(200).send("Bienvenido a la página principal. Mira el /info y el /datos");
});

// GET --> Leer datos y los dejamos en /info en formato HTML
app.get("/info", (req, res) => {
  // NO ES NECESARIO ESPECIFICAR EL CONTENT TYPE! LO DETECTA AUTOMATICAMENTE.
  res.status(200).send("<h2>Información del servidor Express</h2>");
});

//GET --> Leer datos y los dejamos en /datos en formato JSON
app.get("/datos", (req, res) => {
  res.status(200).json({
    curso: "PSP",
    modulo: "Node.js + Express",
    version: 2
  });
});

// la última a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
