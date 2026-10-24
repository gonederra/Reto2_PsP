// Metodos interesantes de la variable global process:

// Argumentos de entrada: Nos permite acceder a los argumentos de entrada que se pasan al script de Node.js desde la 
// línea de comandos. Por ejemplo, si ejecutamos `node app.js arg1 arg2`, 
// `process.argv` contendrá un array con los valores `['node', 'app.js', 'arg1', 'arg2']`. 
// Esto es útil para crear scripts que acepten parámetros de entrada y personalizar su comportamiento según esos parámetros.
console.log(process.argv)

// Current working directory: Nos permite obtener el directorio de trabajo actual del proceso de Node.js.
// Muy interesante ya que no siempre ejecutamos el script desde el mismo directorio donde se encuentra el archivo, 
// por lo que podemos obtener la ruta absoluta del directorio de trabajo actual.
console.log(process.cwd())
