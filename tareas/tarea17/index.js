// Los scripts de HTML se importa asíncrona (async) y al final de todo (defer)

let marker, marker2, marker3, map;

function initMap() {
    const position = {
        lat: -25.363,
        lng: 131.044
    } // Posición inicial

    const position2 = {
        lat: 25.363,
        lng: -131.044
    } // Posición inicial

    const position3 = {
        lat: 25.363,
        lng: 131.044
    } // Posición inicial

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: position
    }); // Generación de mapa

    marker = new google.maps.Marker({
        position,
        map,
        title: "Posición inicial"
    }); // Chincheta

    marker2 = new google.maps.Marker({
        position2,
        map,
        title: "Posición segunda"
    }); // Chincheta
    marker2.setPosition(position2);
    map.setCenter(position2);

    marker3 = new google.maps.Marker({
        position3,
        map,
        title: "Posición tercera"
    }); // Chincheta
    marker3.setPosition(position3);
    map.setCenter(position3);

    // geoPosiciona();
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