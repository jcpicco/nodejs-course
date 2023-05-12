// Cómo trabajar con listas

let var1 = {id: false};
let array = [1, 'hola', {id: 5}, null, undefined, var1];
console.log(array);

let index = array.indexOf(null)
console.log(index);

array.push('final', 45, 100, false); // Inserta al final del array uno o varios elementos
console.log(array);

array.unshift('inicio', 54, 200, true); // Inserta al final del array uno o varios elementos
console.log(array);

array.pop(); // Borra el último elemento
console.log(array);

array.shift(); // Borra el primer elemento
console.log(array);

array.splice(2, 3, 'Nuevo elemento', 'Segundo nuevo elemento'); // Elmimina m valores desde la posición n del índice, y añade uno o varios elementos en esa posición. También puede servir para modificar valores
console.log(array);

// Concatenar dos listas
let lista1 = ['hola', 2, false, null]
let lista2 = ['adiós', 3, true, undefined]

let lista3 = lista1.concat(lista2)
console.log(lista3)

console.log(...lista3) // Muestra por separado cada valor de la lista. Esto se llama factor de propagación
let lista4 = [...lista1, ...lista2]
console.log(...lista4)

let lista5 = [lista1, lista2] // ERROR: Nos da una lista de listas. Por eso necesitamos el factor de propagación
console.log(lista5)

// Saca una lista a partir de un fragmento de otra
let array_slice = array.slice(0, 4) // No modifica el valor del array original
console.log(array_slice);

let array_slice_negative = array.slice(0, -4) // Este número negativo te saca hasta los 4 últimos valores contando del final
console.log(array_slice_negative);