const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", (event) => {
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id); // Añadimos al evento el id del párrafo como "id"

        const elemento_fantasma = document.querySelector(".imagen-fantasma"); // Imagen que se va a mostrar en el drag
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);

    });

    parrafo.addEventListener("dragend", (event) => {
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move"; // Cambia el cursor a cursor en tipo move. Hay varios tipos
        console.log("Pasando por encima de sección");
    });

    seccion.addEventListener("drop", (event) => {
        console.log("Suelto");
        const idParrafo = event.dataTransfer.getData("id"); // Recuperamos el id del párrafo
        const parrafo = document.getElementById(idParrafo); // Recuperamos el párrafo entero mediante su id
        seccion.appendChild(parrafo); // Añade a la otra sección el párrafo
    });
});