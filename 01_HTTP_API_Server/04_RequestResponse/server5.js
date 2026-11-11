//Ahora vamos a ponerlo bonito con picocolors
const http = require('node:http');
const pc = require('picocolors');

const processRequest = (req, res) => {
    
    console.log('Request received:');
    console.log(pc.cyan('Request URL:'),pc.bold(pc.cyan(req.url)));
    console.log(pc.magenta('Request Method:'),pc.bold(pc.magenta(req.method)));


    if (req.url === '/') {
        //Veremos la importancia de los headers!
        //Aqui le indicamos que esto será leido como texto plano y que el charset será UTF-8, para que los acentos se vean correctamente.
        res.setHeader('Content-Type','text/plain; charset=utf-8');
        res.end('Hola mundo! Qué tal?');
        console.log(pc.green('Response sent: Hola mundo!'));
        console.log(pc.green('Status code sent:'),pc.bold(pc.green(res.statusCode)));
    } else if (req.url === '/api/') {
        //Aquí le indicamos que se leera como HTML y pondremos el tamaño con H1, para que se vea más grande.
        res.setHeader('Content-Type','text/html; charset=utf-8');
        //Si fuera texto plano...
        //res.setHeader('Content-Type','text/plain; charset=utf-8');
        res.end('<h1>API endpoint</h1>');
        console.log(pc.green('Response sent: API endpoint'));
        console.log(pc.green('Status code sent:'),pc.bold(pc.green(res.statusCode)));
    } else {
        res.statusCode = 404;
        res.end('Error ' + res.statusCode + '\nPage not found');
        console.log(pc.red('Response sent: Error 404'));
        console.log(pc.red('Status code sent:'),pc.bold(pc.red(res.statusCode)));
    }
}

const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log(pc.yellow('Server listening on port 3000'));
});

