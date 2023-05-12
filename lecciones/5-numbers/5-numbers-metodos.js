// Numbers en JavaScript (parte 2)

let a = 2;
let b = new Number(3); // Casting
console.log(a);
console.log(b);
console.log(a+b);
console.log(b.valueOf()); // Saca el valor del tipo de dato. Esto se hace de manera interna y por eso la suma anterior funciona

//NaN (Not A Number)
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

// Infinity
let numerador = 19;
let denominador = 0;
console.log(numerador/denominador); // Lo trata como infinito porque algo dividido por un número muy pequeño tiende a infinito

let denominador_2 = null;
console.log(numerador/denominador_2);

// Convertir string a number
let numero = '5.89';
let numero_2 = 17.2;
console.log(numero+numero_2); // Concatena los dos valores

console.log(parseInt(numero)); // Conversión a número entero
console.log(parseFloat(numero)); // Conversión a número float

let numero_3 = 4.2;
console.log(parseInt(numero_3));
console.log(parseFloat(numero_3)); // Funcionan igual para números

// Números hexadecimales
let num_hex = '0x3a5b7';
console.log(parseInt(num_hex, 16)); // Convierte número hexadecimal a número en decimal

// Máximos y mínimos
let min_precision = Number.EPSILON; // Precisión mínima que podemos tener. Es el menor número
let min_valor = Number.MIN_VALUE; // Mínimo valor que soporta JavaScript
let max_valor = Number.MAX_VALUE; // Máximo valor que soporta JavaScript
console.log(min_precision);
console.log(min_valor);
console.log(max_valor);

console.log(2**1023); // Valor potencia más grande que soporta JavaScript (gestión de memoria)
console.log(2**1024);
