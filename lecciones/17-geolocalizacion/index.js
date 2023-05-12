// Los scripts de HTML se importa asíncrona (async) y al final de todo (defer)

let marker, map;

function initMap() {
    const position = {
        lat: -25.363,
        lng: 131.044
    } // Posición inicial

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: position
    }); // Generación de mapa

    marker = new google.maps.Marker({
        position,
        map,
        title: "Posición inicial"
    }); // Chincheta

    geoPosiciona();
}

// Función que nos posiciona en nuestra ubicación si la tenemos activada
function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation;
        const options = {timeout: 60000};
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
    } else {
        alert("Tu navegador no admite geolocalización");
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    marker.setPosition(nuevaPos);
    map.setCenter(nuevaPos);
}

function onError(error) {
    console.error(error);
}