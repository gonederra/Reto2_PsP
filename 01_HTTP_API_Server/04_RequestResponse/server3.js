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
    if (req.url === '/') {
        res.end('Hola mundo!');

    // ATENTOS! TRIPLE EQUALS (===) vs DOUBLE EQUALS (==)
    // El triple equals compara tanto el valor como el tipo de dato, mientras que el doble equals solo compara el valor.
    // Por ejemplo, si hacemos 5 == '5', esto devolverá true, ya que el valor es el mismo, aunque el tipo de dato sea diferente (number vs string).
    // En cambio, si hacemos 5 === '5', esto devolverá false, ya que el tipo de dato es diferente.
    // En estos casos da igual, ya que la URL siempre será un string, pero es una buena práctica utilizar el triple equals para evitar errores inesperados.
    } else if (req.url === '/api/') {
        res.end('API endpoint');
    } else {
        res.statusCode = 404;
        res.end('Error ' + res.statusCode + '\nPage not found');
    }
}

const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

