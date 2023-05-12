// Contenido puede variar
var a = 1;
console.log(a)

a = 4
console.log(a)

let b = 2;
console.log(b)

b = 5;
console.log(b)

// Contenido NO puede variar
const constante = "No puedes cambiarme";
console.log(constante);

// constante = "Cambio"

var variable = "Hola soy VAR";

for(var i = 0 ; i < 1 ; i++){
    var variable = "Soy la segunda variable";
    console.log(variable);
}

console.log(variable);

let variable_let = "Hola soy LET";

for(var i = 0 ; i < 1 ; i++){
    let variable_let = "Soy la segunda variable";
    console.log(variable_let);
}

console.log(variable_let)

// typeof nos da el tipo de variable
console.log(typeof variable)
console.log(typeof a)
console.log(typeof variable_sin_definir)

// Las variables pueden cambiar de tipo (var y let)
var num = 4
console.log(typeof num)

num = "prueba"
console.log(typeof num)

// Arrays
let array1 = [1, "hola", true, null, undefined]; // Se pueden especificar valores o dejarlo vacío
console.log(array1);

let array2 = new Array(2, "hola", true, null, undefined); // Se pueden especificar valores o dejarlo vacío
console.log(array2);

let array3 = new Array(3); // Si especificamos un solo número nos guarda la cantidad de espacios deseada
console.log(array3);
array3[0] = "Primer elemento";
console.log(array3);

let array4 = [array1, array2, array3]; //Se pueden hacer arrays anidados
console.log(array4);

// Objetos
const movil = { // Es práctica común declarar los objetos como const
    anchura: 5,
    altura: 10,
    marca_movil: "Xiaomi",
    isWhite: false,
    contactos: ["Aa Mamá", "Aa Papá"],
    "tarjeta-sd": {
        marca: "Toshiba",
        almacenamiento: 32
    }
}

console.log(movil.altura);
console.log(movil["tarjeta-sd"].marca);

movil.anyo = 2019; // Añadir nuevos atributos
console.log(movil.anyo);

movil.marca_movil = "Samsung"; // Editar atributos existentes
console.log(movil.marca_movil);

// Fechas
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // Fecha 10ms después de la fecha original (1970)
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2022");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const fecha = {
    dia: ahora.getDate(),
    mes: ahora.getMonth()+1,
    anyo: ahora.getFullYear()
}

console.log(fecha.dia,fecha.mes,fecha.anyo);