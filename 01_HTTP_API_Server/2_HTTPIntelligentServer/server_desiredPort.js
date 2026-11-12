const http = require('node:http') // protocolo HTTP
const { findAvailablePort } = require('./freeport.js')

//Podemos definir el puerto deseado a través de una variable de entorno
// Se ejecutrá con el comando: PORT=3456 node server_desiredPort.js
const desiredPort = process.env.PORT

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

// Si intentamos ejecutar en un puerto 80 o 443 el error es EACCES, ya que esos puertos
// requieren privilegios de administrador. Como nuestro freeport.js no contempla este error, 
// la promesa se rechazará y nos devuelve el error. El freeport que hemos diseñado solo contempla el error 
// EADDRINUSE, que es el que se produce cuando el puerto está ocupado.