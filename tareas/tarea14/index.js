// npm install --global http-server

const boton = document.querySelector("button");

boton.addEventListener("click", () => {
    alert("Click en el botón");
});

$("#button-2").click(() => {
    console.log("Hola, estoy utilizando jQuery");
});