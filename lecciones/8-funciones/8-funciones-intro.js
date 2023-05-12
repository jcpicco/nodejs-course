// Funciones

function saludar(nombre){
    console.log(`Hola ${nombre}!`);
}

const nom = "Juanma";

saludar(nom);
saludar("Juanma");

// Las funciones no cambian variables primitivas
function despedir(nombre){
    nombre = "Diego";
    console.log(`Adios ${nombre}!`);
}

let nom2 = "Juan";

console.log(nom2);
despedir(nom2);
console.log(nom2);

// Las funciones CAMBIAN objetos (se está pasando una variable por referencia)
function saludarPersona(persona){
    console.log(nom2) // Podemos acceder a variables definidas fuera de la función
    persona.apellidos = "Picco";
    console.log(`Hola ${persona.nombre} ${persona.apellidos}!`);
}

let persona = {nombre: "Juanma", apellidos: "Consigliere"};

console.log(persona.apellidos);
saludarPersona(persona);
console.log(persona.apellidos);

// Parámetros opcionales con valor por defecto
function imprimeNumero(numero = 7){
    console.log(numero);
}

imprimeNumero();
imprimeNumero(27);

// Factor de propagación como parámetro
function suma(...nums){
    return nums.reduce((a, b) => a + b);
}

console.log(suma(4, 9, 2, 3, 2));