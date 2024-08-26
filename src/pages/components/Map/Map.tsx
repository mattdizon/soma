import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon2x = require('leaflet/dist/images/marker-icon-2x.png');
const markerIcon = require('leaflet/dist/images/marker-icon.png');
const markerShadow = require('leaflet/dist/images/marker-shadow.png');

// Fix for missing marker icons
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Set the default icon globally for all markers
L.Marker.prototype.options.icon = DefaultIcon;

const RecenterMap = ({ center }: { center: LatLngExpression }) => {
  const map = useMap();
  map.setView(center); 
  return null; 
};

const MapComponent = ({ coordinates }: { coordinates: LatLngExpression | null }) => {

  const center: LatLngExpression = coordinates || [51.505, -0.09];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}/>
      <RecenterMap center={center} />
    </MapContainer>
  );
};

export default MapComponent;
