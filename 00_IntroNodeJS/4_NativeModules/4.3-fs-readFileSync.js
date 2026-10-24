const fs = require('node:fs')

//1. Read file sync
console.log('Leyendo el archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text)

/*
console.log('--> Hacer cosas mientras lee el archivo...')
*/
//2. Read second file sync
/*console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)
*/

