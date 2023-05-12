// Formas de importar/exportar módulos
// CommonJS - require
// Import ES6 - import

const moduloMatematicas = require("./modules/matematicas");
// const {factorial, suma} = require("./modules/matematicas"); // Alternativa para importar las funciones que queremos

const factorial = moduloMatematicas.factorial;
const suma = moduloMatematicas.suma;

console.log(factorial(5));
console.log(suma(2, 2));
