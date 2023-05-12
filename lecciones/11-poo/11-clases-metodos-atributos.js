// Clases en Javascript. Métodos y atributos

class Persona {
    #nombre; // Variable privada (accesible solamente desde dentro de la clase)
    #edad;
    _isDeveloper; // Variable protegida (accesible solamente desde dentro de la clase y clases descendientes)

    constructor(nombre, edad, isDeveloper) {
        this.#nombre = nombre;
        this.#edad = edad;
        this._isDeveloper = isDeveloper;
    }

    #saludo() {
        console.log(`Hola, me llamo ${this.#nombre} y tengo ${this.#edad} años`);
    } // Función privada, accesible solamente dentro de la clase pero no fuera

    getNombre() {
        return this.#nombre;
    }

    getEdad() {
        return this.#edad;
    }

    setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
        return this.#nombre;
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad;
        return this.#edad;
    }
}

const persona = new Persona("Juan", 24);
console.log(persona);

// persona.nombre = "Adios";
// console.log(persona); // Si no es variable privada se pueden cambiar los atributos, y hay ocasiones en las que no se quieren poder cambiar los atributos

console.log(persona.getEdad());
persona.setEdad(34);
console.log(persona.getEdad());