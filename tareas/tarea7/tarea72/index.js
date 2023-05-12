const misDatos = {
    nombre: "Juan Manuel",
    apellidos: "Consigliere Picco",
    edad: 24,
    altura: 1.77,
    eresDesarrollador: true
};
console.log(misDatos);

const miEdad = misDatos.edad;
console.log(miEdad);

const misDatosList = [...Object.values(misDatos)];
console.log(misDatosList);

const datosAmigos = [
    {
        nombre: "Pepe",
        apellidos: "Lopez",
        edad: 26,
        altura: 1.32,
        eresDesarrollador: false
    },
    {
        nombre: "Javier",
        apellidos: "Maza",
        edad: 21,
        altura: 1.94,
        eresDesarrollador: true
    }
];
console.log(datosAmigos);

datosAmigosOrdenada = datosAmigos.sort((a, b) => a.edad - b.edad)
console.log(datosAmigosOrdenada);