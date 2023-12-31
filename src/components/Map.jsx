import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { onMount } from 'solid-js'

function buildMap(div) {
  const map = L.map(div, {
    zoomControl: false, dragging: false,
    scrollWheelZoom: false, doubleClickZoom: false,
  }).setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
}

function Map() {
  let mapDiv;
  onMount(() => buildMap(mapDiv));
  return (
    <div ref={mapDiv} id='main-map' class="h-full" />
  );
}

export default Map;
