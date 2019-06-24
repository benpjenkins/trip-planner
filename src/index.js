const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYmVuamVua2luc2RldiIsImEiOiJjanhham5hbDUxNzdjM3pxYmpwb21jZGw5In0.rwNJu7SgFpQL3RBdJpJSnw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

console.log('index file is working');
