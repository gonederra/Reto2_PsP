const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('Request received');
    res.end('Hola mundo!');
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// Si utilizamos el puerto cero, automaticamente utilizará el primer puerto disponible
/*
server.listen(0, () => {
    console.log('Server listening on port ????');
});
*/


// El server.address() devuelve un objeto con la información del puerto en el que se está escuchando
/*
server.listen(0, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`);
});
*/