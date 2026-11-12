// Creamos una aplicacion que encuentra un puerto disponible para iniciar un servidor HTTP. 
// Si el puerto deseado está ocupado, busca otro puerto disponible automáticamente.

// NET es un módulo de Node.js que proporciona una API para crear servidores y clientes TCP/IPC.
const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    // Intentamos escuchar en el puerto deseado
    server.listen(desiredPort, () => {
      // Si el puerto está disponible, obtenemos el puerto asignado y cerramos el servidor
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    // Gestionamos el evento del error del servidor
    server.on('error', (err) => {
      // Si el error es EADDRINUSE, significa que el puerto está ocupado, así que buscamos otro puerto disponible
      if (err.code === 'EADDRINUSE') {
        // Buscamos un puerto disponible automáticamente llamando a la función recursivamente con 0,
        // lo que permite al sistema asignar un puerto disponible
        findAvailablePort(0).then(port => resolve(port))
      // Si el error es diferente, rechazamos la promesa con el error
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }