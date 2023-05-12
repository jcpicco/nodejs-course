// Iterar los valores de una lista
let array = ['hola', 2, 5, 90, false, undefined];

// Forma antigua (poco eficiente)
for (let i=0 ; i<array.length ; i++){
    console.log(array[i]);
}

// Forma ES6 (más eficiente)
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];

arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
}); // forEach no devuelve nada

console.log(suma);