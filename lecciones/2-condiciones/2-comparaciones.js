// Igualdad
let a = 5;
let b = "5";

if (a == b) { // El valor es igual pero el tipo no
    console.log("Igualdad débil");
}

if (a === b) { // El valor y el tipo son iguales
    console.log("Igualdad fuerte");
}

b = 5;

if (a == b) {
    console.log("Igualdad débil");
}

if (a === b) {
    console.log("Igualdad fuerte");
}

// Diferencias de igualdad
b = "5";

if (a != b) { // El valor es distinto
    console.log("Desigualdad común");
}

if (a !== b) { // El valor es distinto pero el tipo es igual
    console.log("Desigualdad extendida");
}

b = 6;

if (a != b) { 
    console.log("Desigualdad común");
}

if (a !== b) { 
    console.log("Desigualdad extendida");
}
