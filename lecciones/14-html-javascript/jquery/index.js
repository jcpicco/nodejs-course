// $(selector).acción(); Realiza operaciones con distintos selectores
// $("li").hide();

// # -> Buscamos por id | . -> Buscamos por class

$(document).ready(() => {
    $("#el-1").hide();
}); // Esto se ejecuta una vez se termine de cargar el documento. MUY IMPORTANTE

$(() => {
    $("#el-3").hide();
}); // Esto es lo mismo que el ready()

$(".button-hide").click(() => {
    $("h1").hide();
}); // Definición de funcionamiento de eventos de un click

$(".button-show").click(() => {
    $("h1").show();
});

$("li").dblclick(() => {
    $("h1").css({color: "red"});
}); // Definición de funcionamiento de eventos de doble click

$(".new-element").click(() => {
    $("u1").prepend(`<li id="el-new">nuevoElementoAbajo</li>`); // Añade items al principio
    $("u1").append(`<li id="el-new">nuevoElementoArriba</li>`); // Añade items al final
});

$("li").mouseenter((elem) => {
    console.log("Ha entrado el ratón");
    elem.target.style.color = "blue"; // Cambio de color
}); // Definición de funcionamiento de eventos cuando se pone ratón encima

$("li").mouseleave((elem) => {
    console.log("Ha salido el ratón");
    elem.target.style.color = "black";
}); // Definición de funcionamiento de eventos  cuando se quita el ratón
