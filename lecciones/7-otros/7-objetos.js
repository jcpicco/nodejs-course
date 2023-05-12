// Objetos en Javascript

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: "true",
    librosFavoritos: ["El método", "El código de la manifestación"],
    "-numeros-": [1, 2, 3, 4] // Sirve para añadir guiones y caracteres raros. Pueden ser comillas simples o dobles
};

console.log(obj.id);
console.log(obj["id"]);
// console.log(obj.-numeros-); // MAL
console.log(obj["-numeros-"]);

const key = "-numeros-";
console.log(obj[key]);

// Duplicado de objetos
const obj2 = obj; // Podemos igualar un objeto a otro, pero estamos copiando la dirección de memoria, por lo que si hacemos cambios se cambian los dos objetos. Esto no ocurre con elementos primitivos, sino solo con objetos
obj2.nombre = "Iñigo";
console.log(obj.nombre);
console.log(obj2.nombre);

const obj3 = {...obj2};
obj3.nombre = "Pepito";
console.log(obj2.nombre);
console.log(obj3.nombre);

// Ordenación de objetos: Se hace lo mismo que con la sobrecarga de operadores en C++
const listaObj = [
    {obj: "a", number: 1},
    {obj: "b", number: 5},
    {obj: "c", number: 3},
    {obj: "d", number: 4},
    {obj: "e", number: 2}
]

console.log(listaObj.sort((a, b) => a.number - b.number));
console.log(listaObj.sort((a, b) => a.obj - b.obj));