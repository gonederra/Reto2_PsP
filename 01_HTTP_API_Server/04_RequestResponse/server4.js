//Ahora vamos a ponerlo bonito con picocolors
const http = require('node:http');
const pc = require('picocolors');

const processRequest = (req, res) => {
    
    console.log('Request received:');
    console.log(pc.cyan('Request URL:'),pc.bold(pc.cyan(req.url)));
    console.log(pc.magenta('Request Method:'),pc.bold(pc.magenta(req.method)));


    if (req.url === '/') {
        res.end('Hola mundo!');
        console.log(pc.green('Response sent: Hola mundo!'));
        console.log(pc.green('Status code sent:'),pc.bold(pc.green(res.statusCode)));
    } else if (req.url === '/api/') {
        res.end('API endpoint');
        console.log(pc.green('Response sent: API endpoint'));
        console.log(pc.green('Status code sent:'),pc.bold(pc.green(res.statusCode)));
    } else {
        //Aqui tened en cuenta que si comentamos el 404, el navegador asumira que la peticion ha sido correcta y nos
        //devolvera un 200 OK, aunque la pagina no exista. Por eso nosotros debemos indicar que la pagina no existe y devolver un 404.
        res.statusCode = 404;
        res.end('Error ' + res.statusCode + '\nPage not found');
        console.log(pc.red('Response sent: Error 404'));
        console.log(pc.red('Status code sent:'),pc.red(res.statusCode));
    }
}

const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log(pc.yellow('Server listening on port 3000'));
});

