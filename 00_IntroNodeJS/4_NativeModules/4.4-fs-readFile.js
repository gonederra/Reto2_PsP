const fs = require('node:fs')

//Un callback es una funcion que se ejecuta cuando termina de ejecutarse otra funcion, en este caso readFile
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <---- ejecutas este callback
  console.log('primer texto:', text)
})

//Tu sigue ejecutando el resto del codigo, mientras readFile esta leyendo el archivo
//que el callback ya te avisara cuando termine de leerlo, y te pasara el contenido del archivo como parametro
console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto:', text)
})