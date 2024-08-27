import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import marker icons from leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for missing marker icons
const DefaultIcon = L.icon({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


L.Marker.prototype.options.icon = DefaultIcon;


const RecenterMap = ({ center }: { center: LatLngExpression }) => {
  const map = useMap();
  map.setView(center); 
  return null; 
};

const MapComponent = ({ coordinates }: { coordinates: LatLngExpression | null }) => {
  const center: LatLngExpression = coordinates || [51.505, -0.09];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '50%', width: '100%' }}>
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
