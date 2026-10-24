/*
  Módulo nativo path de Node.js:
    El módulo path proporciona utilidades para trabajar con rutas de archivos y directorios.
    Gracias a este módulo, podemos manipular rutas de manera más sencilla y segura,
    sin preocuparnos por las diferencias entre sistemas operativos (por ejemplo, la barra separadora de carpetas).
*/
const path = require('node:path')

// Podemos ver la barra separadora de carpetas según el SO
// Si queremos que nuestra aplicación sea multiplataforma, es recomendable utilizar el módulo path para 
// unir rutas y evitar problemas con las barras separadoras.
console.log(path.sep)

// La manera correcta de unir rutas es utilizando el método path.join para así evitar problemas con las barras separadoras.
// En windows la siguiente ruta sería:  content\subfolder\test.txt
// En UNIX la siguiente ruta sería:     content/subfolder/test.txt
// El método path.join se encarga de unir las rutas de manera correcta según el sistema operativo.
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Con basename podemos obtener el nombre del archivo de una ruta,
// y con extname podemos obtener la extensión del archivo.
const base = path.basename('/tmp/userFiles/password.txt')
console.log(base)

const extension = path.extname('/tmp/userFiles/password.txt')
console.log(extension)

const filename = path.basename('/tmp/userFiles/password.txt', '.txt')
console.log(filename)

const extensionJPG = path.extname('my.super.image.jpg')
console.log(extensionJPG)