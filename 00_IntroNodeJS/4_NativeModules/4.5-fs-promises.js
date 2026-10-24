// Se ha ido migrando de callbacks a promesas en Node.js, y ahora se puede usar el módulo 'fs/promises' 
// para trabajar con el sistema de archivos de manera más sencilla y moderna.

// Con promisify puedes convertir funciones basadas en callbacks en funciones que devuelven promesas, pero 
// no las veremos en este curso, ya que Node.js ya tiene soporte nativo para promesas en muchos de sus módulos.

// Una promesa en JavaScript es un objeto que representa la eventual finalización (o falla) de una operación 
// asincrónica y su valor resultante.
const fs = require('node:fs/promises')


// Gracias a las promesas, podemos escribir código asincrónico de manera más legible y fácil de entender,
// evitando el "callback hell" y facilitando el manejo de errores.

// Antes: readFile con callback
// Ahora: readFile con promesas
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('--> Hacer cosas mientras lee el archivo...')

//De esta manera, al cumplir la promesa, se ejecuta la función que imprime el contenido del archivo.
console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })