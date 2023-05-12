let array = ['hola', 2, 5, 90, false, undefined];

// Encontrar una variable en una lista
const variable = array.find(valor => {
    return valor === 90;
});
console.log(variable);

const listaPersonas = [
    {nombre: 'Leire', edad: 35},
    {nombre: 'Gorka', edad: 34},
    {nombre: 'Miguel', edad: 28},
    {nombre: 'Lucía', edad: 3},
    {nombre: 'Amaia', edad: 29},
];

const persona = listaPersonas.find(o => o.nombre === 'Miguel');
console.log(persona.nombre);

const {edad} = listaPersonas.find(o => o.nombre === 'Miguel'); // Así solamente accedes a la propiedad edad de listaPersonas
console.log(edad);

// Map, filter, reduce
const arraySitios = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"];

const newArraySitios = arraySitios.map((valor, indice) => {
    return `${indice + 1} - ${valor}`;
}); // Realiza operaciones sobre los objetos de un array. El índice es opcional
console.log(newArraySitios);

const newListaPersonas = listaPersonas.filter(o => o.edad > 30);
console.log(newListaPersonas);

const valores = [3, 56, 23, 5, 90, 100];
const suma = valores.reduce((acumulado, curr, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(curr);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + curr
}); // Tenemos valor acumulado, valor actual, índice y array original. El valor acumulado es el que retornas en cada iteración
console.log(suma)
