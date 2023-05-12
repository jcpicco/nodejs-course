// Ordenación de listas
const array = [2, 5, 9, 15, 1, 2, 0, 4]

array.sort((ant, curr) => {
    return -1
}); // Darle la vuelta a la lista es -1, mantenerla igual es +1
console.log(array)

array.sort((ant, curr) => {
    return -1
});

array.sort((ant, curr) => {
    if (ant < curr){
        return -1
    } else if (ant > curr){
        return +1
    } else{
        return 0
    }
}); // Ordenación ascendente. Se cambian las posiciones de -1 a +1 para darle la vuelta
console.log(array);

arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546];
arrayNumerico.sort((a, b) => a - b); // Otra forma de ordenación ascendente (solo numéricos)
console.log(arrayNumerico)

const listaPersonas = [
    {nombre: 'Leire', edad: 35},
    {nombre: 'Gorka', edad: 34},
    {nombre: 'Miguel', edad: 28},
    {nombre: 'Lucía', edad: 3},
    {nombre: 'Amaia', edad: 29},
];

listaPersonas.sort((ant, curr) => {
    if (ant.edad < curr.edad){
        return -1
    } else if (ant.edad > curr.edad){
        return +1
    } else{
        return 0
    }
}); // Pueden ordenarse objetos también
console.log(listaPersonas);

// Comparación de listas. Las listas no pueden compararse con operadores
const arrayCompare = [4, 6, 7, 8, 3, 5, 2, 1, -4, -7, 12, 5, -40];
let resultado = array.every(valor => {
    if (typeof valor === 'number'){
        return true;
    } else{
        return false;
    }
});
console.log(resultado);

resultado = array.every(valor => typeof valor !== 'number');
console.log(resultado);

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

const compararArrays = (array1, array2) => {
    if (array1.length !== array2.length) return false;

    const res = array1.every((valor, indice) => valor === array2[indice]);

    return res;
}
console.log(compararArrays(ar1, ar2));

const ar3 = [1, 2, 3, 9];
console.log(compararArrays(ar1, ar3));

// Comprobar si algunos elementos de una lista cumplen una condición
const arraySome = [3, 7, 2, 4, 7, 9, 42, 35, 7835, 23, -2];
console.log(arraySome.some(valor => valor < 0));
console.log(arraySome.some(valor => valor < -10));

const existe = arraySome.some(valor => valor === 35);
console.log(existe);

const existeJuanLucia = listaPersonas.some(persona => (persona.nombre === 'Juan' || persona.nombre === 'Miguel'));
console.log(existeJuanLucia);

// Lista a partir de objeto iterable
const str = "Hola! soy Juanma";
const arStr = Array.from(str);
console.log(arStr);

const set = new Set([2, 3, 'hola', 2, 4, 'hola', 'hola']);
const arSet = Array.from(set);
console.log(arSet);

// Obtener iterable de los índices de un array
const keys = array.keys()
console.log(keys)

const arKeys = Array.from(keys)
console.log(arKeys)

const listaPersonasKeys = Array.from(listaPersonas.keys())
console.log(listaPersonasKeys)
