const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".papelera");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", (event) => {
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id); // Añadimos al evento el id del párrafo como "id"
    });

    parrafo.addEventListener("dragend", (event) => {
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move"; // Cambia el cursor a cursor en tipo move. Hay varios tipos
    });

    seccion.addEventListener("drop", (event) => {
        const idParrafo = event.dataTransfer.getData("id"); // Recuperamos el id del párrafo
        const parrafo = document.getElementById(idParrafo); // Recuperamos el párrafo entero mediante su id
        seccion.appendChild(parrafo); // Añade a la otra sección el párrafo
    });
});

papelera.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
});

    
papelera.addEventListener("drop", (event) => {
    const parrafo = document.getElementById(event.dataTransfer.getData("id"));
    const seccion = parrafo.parentElement

    seccion.removeChild(parrafo);
});


