const hTexto = document.getElementById("h-texto");
console.log(hTexto);

hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.details);
    hTexto.innerText = evento.detail.texto;
    hTexto.style.color = evento.detail.color;
}); // Funcionamiento del evento personalizado

function cambiarTexto(nuevoTexto, color){
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color: color
        }
    }); // Crear evento personalizado

    hTexto.dispatchEvent(evento); // Lanzamos el evento sobre hTexto
}