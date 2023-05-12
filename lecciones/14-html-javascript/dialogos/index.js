const boton = document.querySelector("#button");

boton.addEventListener("click", () => {
    alert("Se ha hecho click"); // Popup de alerta
    // confirm("Estás de acuerdo?") && console.log("OK?"); // Popup de aceptar o cancelar. el && Hace que si se ejecuta se haga lo siguiente
    // confirm("Seguro?") ? console.log("OK") : console.log("NO"); // El ?, : es un if else

    const respuesta = confirm("Seguro?");
    if (respuesta) {
        console.log("Estás de acuerdo");
    } else {
        console.log("NO estás de acuerdo");
    }
});

const botonInfo = document.querySelector("#info");

botonInfo.addEventListener("click", () => {
    const nombre = prompt("Cuál es tu nombre?");
    
    if (nombre) {
        console.log("Tu nombre es " + nombre);
    } else {
        console.log("No has introducido nada");
    }
});

const lista = [
    {
        nombre: "Gorka",
        edad: 34
    },
    {
        nombre: "Juanma",
        edad: 24
    },
    {
        nombre: "Pedro",
        edad: 14
    }
];
console.table(lista); // Muestra array como tabla