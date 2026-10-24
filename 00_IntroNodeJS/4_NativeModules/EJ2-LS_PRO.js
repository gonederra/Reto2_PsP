const fs = require('node:fs/promises')

//* Obtenemos el directorio de trabajo actual del proceso de Node.js, y ponemos por defecto el directorio actual (.) 
//* Recordad que hay que coger el segundo argumento de process.argv, ya que el primero es la ruta del ejecutable de 
//* Node.js y el segundo es la ruta del script que estamos ejecutando.
const folder = process.argv[2] || '.'

fs.readdir(folder)
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

  //! Mirad tambien lo que pasa en caso de que le pasemos un archivo al script, en vez de un directorio!