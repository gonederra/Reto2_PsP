//Ya que vamos a crear un servidor HTTP, necesitamos importar el módulo 'http' de Node.js
const http = require('node:http');

const processRequest = (req, res) => {
    
    console.log('Request received:');
    //REQUEST: URL + HEADERS (OPCIONALES) + METHOD + BODY
    console.log('Request URL:',req.url);
    console.log('Request Method:',req.method);
  

    // Ahora mismo, independientemente de si la petición es a / o a /api o a /api/clientes, 
    // siempre vamos a responder con el mismo mensaje. Sin embargo, tenemos la informacion 
    // de la URL de la petición en la variable req.url, por lo que podríamos hacer un if 
    // para responder diferente según la URL solicitada.
    res.end('Hola mundo!');
}

const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

