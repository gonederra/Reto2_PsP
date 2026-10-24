// La ventaja de node.js es que nos permite acceder a muchos modulos de manera nativa,
// sin necesidad de instalar librerías externas. 
// Por ejemplo, podemos utilizar el módulo 'os' que viene incluido en Node.js.
const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('-------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)