// Métodos de cadenas de texto (parte 2)

let input = "Escorpio";
let db_input = "escorpio";

console.log(input === db_input);
console.log(input.toLowerCase() === db_input);
console.log(input.toUpperCase() === db_input.toUpperCase());

// Concatenación de strings
let str_1 = "Hola";
let str_2 = "mundo";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2); // CUIDADO! Pueden sumarse números en vez de concatenarse
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final
str_3 = "    Hola mundo!    ";
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener carácter de cierta posición
console.log(str_2.charAt(3));
console.log(str_2[3]);

// Obtener la posición de una palabra
let str_4 = "Hola! Soy Juanma y estoy haciendo un cursillo. Mi nombre es Juan Manuel, pero puede llamarme Juanma.";
console.log(str_4.indexOf('Juanma'));
console.log(str_4.lastIndexOf('Juanma'));

let str = new String("Hola mundo!"); // Casting
console.log(str);
console.log(str.valueOf()); // Saca el valor del tipo de dato. Esto se hace de manera interna