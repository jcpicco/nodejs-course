// Herencia y polimorfismo

class Persona {
    _nombre; // Estos atributos son accesibles para esta clase y para sus clases hijas
    _edad;

    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    saludo() {
        console.log(`Hola, me llamo ${this._nombre} y tengo ${this._edad} años`);
    }
}

class Desarrollador extends Persona {
    _lenguaje;

    constructor(nombre, edad, lenguaje) {
        super(nombre, edad); // Constructor de la clase padre
        this._lenguaje = lenguaje;
    }

    saludo() {
        super.saludo(); // Método saludo() de la clase padre
        console.log(`Soy desarrollador de ${this._lenguaje}`);
    }
} // Coge todo lo de la clase Persona, desde sus constructores hasta sus atributos y métodos

const nuevoDev = new Desarrollador("Juan", 24, "Javascript");
console.log(nuevoDev);
nuevoDev.saludo();

// En Javascript NO existen las interfaces, pero sí en Typescript