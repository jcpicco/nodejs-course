// Fechas

const fecha = new Date();
console.log(fecha);

const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192); // Los dos únicos parámetros opcionales son: año y mes (de 0 a 11)
console.log(fecha2);

const fecha3 = new Date(10000000000); // Se pueden especificar milisegundos y milisegundos negativos
console.log(fecha3);

const fecha4 = new Date("October 13, 1970, 12:12:34");
console.log(fecha4);

console.log(fecha < fecha2);
console.log(fecha3 < fecha2);

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha2 === fecha5); // ERROR: No se pueden comparar fechas para el operador === ó ==
console.log(fecha2.getTime() === fecha5.getTime()); // Se pueden igualar fechas pasandolas a milisegundos

console.log(fecha5.getDate()) // Día
console.log(fecha5.getMonth() + 1) // Mes
console.log(fecha5.getYear()) // Año acortado
console.log(fecha5.getFullYear()) // Año
console.log(fecha5.toLocaleDateString("en-US")) // Fecha con formato local