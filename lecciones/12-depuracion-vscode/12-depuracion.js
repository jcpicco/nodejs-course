const persona = {
    nombre: "Juanma",
    edad: 24
};

console.log(persona)

function obtenDobleEdad(edad){
    return 2*edad;
}

const dobleEdad = obtenDobleEdad(persona.edad);
console.log(dobleEdad);