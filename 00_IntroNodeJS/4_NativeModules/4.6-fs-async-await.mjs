// Async/await es una forma más moderna y legible de trabajar con promesas en JavaScript. 
// Permite escribir código asincrónico que se parece al código síncrono, 
// lo que facilita su comprensión y mantenimiento.

// Esto lo que está haciendo es una función asíncrona pero secuencial, es decir, que se ejecuta de manera secuencial, 
// esperando a que cada operación asíncrona se complete antes de pasar a la siguiente.

// Sin embargo, async/await no es compatible con CommonJS, por lo que debemos usar módulos ES (ECMAScript) 
// para poder utilizarlo sin hacer grandes cambios.

// Tecnicamente si se puede hacer pero es un rollo, y no es recomendable. Se puede hacer con un 
// IIFE (Immediately Invoked Function Expression)

import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)
