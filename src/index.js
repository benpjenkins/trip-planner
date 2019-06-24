const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
'pk.eyJ1IjoiZWRnYXJjMDk5OCIsImEiOiJjanhha2Vzam8wMzA1M3lvODRuY3E4dHc4In0.Hy3XO9awY8YZgLLn_SuIIg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url('http://i.imgur.com/WbMOfMl.png')";

// new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map);

const marker = buildMarker("activity", [-87.6354, 41.8885]);
marker.addTo(map);

const hotelmarker = buildMarker("hotel", [-88.6354, 41.8885]);
hotelmarker.addTo(map);

const restaurantmarker = buildMarker("restaurant", [-87, 41.8885]);
restaurantmarker.addTo(map);


console.log('index file is working');
