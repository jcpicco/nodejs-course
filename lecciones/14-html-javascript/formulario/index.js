const f = document.getElementById("formulario");
console.log(f);

f.addEventListener("submit", (evento) => {
    console.log(evento);
    evento.preventDefault(); // Quiero que evites el comportamiento por defecto
}); // Tiene como parámetro el evento al que se llama y se ejecuta una funcionalidad para el evento cuando se active