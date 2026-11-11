//Ya que vamos a crear un servidor HTTP, necesitamos importar el módulo 'http' de Node.js
const http = require('node:http');

//Creamos la función processRequest que se encargará de procesar las peticiones (requests) y enviar respuestas (responses)
//Otros nombres que se podrían utilizar para esta función son handleRequest, requestHandler, processHttpRequest, entre otros.
const processRequest = (req, res) => {
    
    //Esta linea nos muestra en consola la petición (request) que ha llegado al servidor
    //Podemos ver en el navegador utilizando el F12 el metodo GET y la URL que se ha solicitado
    console.log('Request received:');
    //REQUEST: URL + HEADERS (OPCIONALES) + METHOD + BODY
    console.log('Request URL:',req.url);
    console.log('Request Headers:',req.headers);
    console.log('Request Method:',req.method);
    console.log('Request Body:',req.body);

    //Esta linea nos permite enviar una respuesta (response) al cliente que ha hecho la petición
    //El .end() nos permite finalizar la respuesta y enviar el mensaje 'Hola mundo!' al cliente

    res.end('Hola mundo!');

    //RESPONSE: STATUS CODE + HEADERS (OPCIONALES) + BODY
    console.log('Status code received:',res.statusCode);
    console.log('Response Headers:',res.headers);
    console.log('Response Body:',res.body);
}

// Creamos un servidor HTTP que escucha peticiones y responde con un mensaje
const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

