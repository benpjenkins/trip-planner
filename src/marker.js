const mapboxgl = require('mapbox-gl');

function buildMarker(type, coordinates) {

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";

    if(type === "activity") {
        markerDomEl.style.backgroundImage = "url(../public/actvity.png)";
    }
    else if(type === "hotel") {
        markerDomEl.style.backgroundImage = "url(../public/hotel.png)";

    }
    else if(type === "restaurant") {
        markerDomEl.style.backgroundImage = "url(../public/restaurant.png)";

    }

    const marker = new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
    return marker;

}

module.exports = buildMarker;