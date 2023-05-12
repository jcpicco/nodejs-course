// Programación Orientada a Objetos

const persona = {
    nombre: "Juanma",
    edad: 24,
    isDeveloper: true,
    saludo: function() {
        console.log("Hola!")
    }
};

console.log(persona);
persona.saludo();

const otraPersona = {
    nombre: "Pepe",
    edad: 17,
    isDeveloper: false,
    saludo: function() {
        console.log("Hola mundo!")
    }
};

console.log(otraPersona);
otraPersona.saludo();

// Se crea un generador de objetos Persona
const creaPersona = (nombre, edad, isDeveloper, saludo) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log(saludo)
        }
    }
};

const otraPersonaMas = creaPersona("Paca", 31, true, "Qué tal?");
console.log(otraPersonaMas);
otraPersonaMas.saludo();