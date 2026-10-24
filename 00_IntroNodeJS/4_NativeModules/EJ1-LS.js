const fs = require('node:fs/promises')

// El error está primero en el callback queriendo, para que no nos olvidemos de manejarlo, y luego el resultado. 
// En este caso, el resultado es un array con los nombres de los archivos y carpetas del directorio actual.

// Mirad que la estructura se parece al Try Catch, pero en este caso es un .then y un .catch.
fs.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    if (err) {
      console.error('Error al leer el directorio: ', err)
      return;
    }
  })