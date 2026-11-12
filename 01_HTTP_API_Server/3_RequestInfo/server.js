const http = require('node:http');

const server = http.createServer((req, res) => {
    // Antes: console.log('Request received');
    // Muestra la URL de la petición en la consola
    // Asi podemos ver si la request es a / o a /api o a /api/clientes...
    console.log('Request received:',req.url);
    res.end('Hola mundo!');
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// Esto funciona en navegador y con curl en terminal!