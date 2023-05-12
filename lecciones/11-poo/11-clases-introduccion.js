// Clases en Javascript

class Persona {
    nombre;
    edad;
    isDeveloper;

    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

const nuevaPersona = new Persona("Juan", 24, true); // Instanciar objetos de tipo Persona
console.log(nuevaPersona);
nuevaPersona.saludo();
console.log(nuevaPersona instanceof Persona); // True si pertenece a la clase Persona