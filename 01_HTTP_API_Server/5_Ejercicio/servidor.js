const http = require('node:http');
const pc = require('picocolors');

// TODO: sustituir por los datos reales de la API de SI
const clientes = [
  { id: 1, nombre: 'Ana López'},
  { id: 2, nombre: 'Vidrios Norte S.L.' },
  { id: 3, nombre: 'Cristalería Sur' },
  { id: 4, nombre: 'Eva' },
];

const pedidos = [
  { id: 1, clienteId: 1, producto: 'Vidrio templado 6mm', cantidad: 10 },
  { id: 2, clienteId: 2, producto: 'Espejo 80x120', cantidad: 2}
];

const processRequest = (req, res) => {
  // 2) REQUEST: amarillo y negrita
  console.log(pc.bold(pc.yellow('------- REQUEST -----')));
  console.log(pc.bold(pc.yellow('Request URL: ' + req.url)));
  console.log(pc.bold(pc.yellow('Request Method: ' + req.method)));

  let mensaje;

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>¡Bienvenido!</h1><p>Esta es mi API de clientes y pedidos.</p><a href="/api">Ver la API</a>');
    mensaje = 'Bienvenida';
  } else if (req.url === '/api') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(
      '<h1>API</h1>' +
      '<h2>Clientes</h2><h3>Lista de clientes</h3><a href="/clientes">/clientes</a>' +
      '<h2>Pedidos</h2><h3>Lista de pedidos</h3><a href="/pedidos">/pedidos</a>'
    );
    mensaje = 'API endpoint';
  } else if (req.url === '/clientes') {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(clientes, null, 2));
    mensaje = 'Clientes';
  } else if (req.url === '/pedidos') {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(pedidos, null, 2));
    mensaje = 'Pedidos';
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Error 404\nPage not found');
    mensaje = 'Error 404';
  }

  // 3) RESPONSE: verde si 200, rojo si 404
  const color = res.statusCode === 200 ? pc.green : pc.red;
  console.log(color('------- RESPONSE -----'));
  console.log(color('Response sent: ' + mensaje));
  console.log(color('Status code sent: ') + pc.bold(color(res.statusCode)));
};

const server = http.createServer(processRequest);

// 1) Puerto en amarillo
server.listen(3000, () => {
  console.log(pc.yellow('Server listening on port 3000'));
});