// Métodos de cadenas de texto (parte 3)
// https://regexr.com Sandbox de RE

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles";

console.log(texto_largo.match(/no/g));

console.log(texto_largo.includes('comer')); // Te dice si una palabra existe en un string. Es cases sensitive

// Comprobar si string empieza o acaba por letra o string
console.log(texto_largo.startsWith('pedro no'));
console.log(texto_largo.startsWith('Tito no'));
console.log(texto_largo.endsWith('de los helechos'));
console.log(texto_largo.endsWith('de los árboles'));
