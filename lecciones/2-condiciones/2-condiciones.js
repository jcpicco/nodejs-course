// If-Else
if (true) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}

let cuentaActivada = true;
let saldo = 150;
let efectivo = 100;

if (cuentaActivada) {
    if (efectivo < saldo) {
        console.log("Puedes sacar dinero");
    } else if (efectivo == saldo) {
        console.log("Te has quedado a cero en la cuenta");
    } else {
        console.log("No puedes sacar dinero");
    }
} else if (!cuentaActivada) {
    console.log("Cuenta desactivada");
}

// Switch
let nota = 10;

switch(nota) {
    case 10:
        console.log("Sobresaliente");
        break;
    case 9:
        console.log("Sobresaliente");
        break;
    case 8:
        console.log("Notable");
        break;
    case 7:
        console.log("Notable");
        break;
    case 6:
        console.log("Bien");
        break;
    case 5:
        console.log("Aprobado");
        break;
    default:
        console.log("Suspenso");
        break;
}

