import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.css";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [zoom, setZoom] = useState(13);
  const [center, setCenter] = useState({
    Lat: 22.66247363997702,
    Long: 88.44767905068652,
  });

  return (
    <div className="map-container" >
      <MapContainer
        center={[center.Lat, center.Long]}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[center.Lat, center.Long]}>
          <Popup>
            Latitude : {center.Lat} <br /> Longitude: {center.Long}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
