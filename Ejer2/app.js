import express from "express";
const app = express();
const port = 3000;

// GET --> Leer datos
app.get("/", (req, res) => {
  res.send("Bienvenido a la página principal");
});

// GET --> Leer datos y los dejamos en /info
app.get("/info", (req, res) => {
  res.send("<h2>Información del servidor Express</h2>");
});

//GET --> Leer datos y los dejamos en /datos 
app.get("/datos", (req, res) => {
  res.json({
    curso: "PSP",
    modulo: "Node.js + Express",
    version: 2
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
