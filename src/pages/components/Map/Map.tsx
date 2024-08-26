import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import marker icons from leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for missing marker icons
const DefaultIcon = L.icon({
  iconUrl: markerIcon.src,  // Access the `src` property for the string URL
  iconRetinaUrl: markerIcon2x.src,  // Access the `src` property for the string URL
  shadowUrl: markerShadow.src,  // Access the `src` property for the string URL
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Set the default icon globally for all markers
L.Marker.prototype.options.icon = DefaultIcon;

// Custom component to handle map re-centering
const RecenterMap = ({ center }: { center: LatLngExpression }) => {
  const map = useMap(); // Access the map instance
  map.setView(center);  // Programmatically set the center of the map
  return null;  // This component does not render anything
};

const MapComponent = ({ coordinates }: { coordinates: LatLngExpression | null }) => {
  const center: LatLngExpression = coordinates || [51.505, -0.09];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <RecenterMap center={center} />  {/* Add this to handle map re-centering */}
    </MapContainer>
  );
};

export default MapComponent;
