import "./map.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const [zoom, setZoom] = useState(13);
  const [center, setCenter] = useState({
    Lat: 22.66247363997702,
    Long: 88.44767905068652,
  });
  // const map = L.map('map', { center: [center[0], center[1]], zoom: zoom})

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         console.log(position);
//         setCenter({
//           Lat: position.coords.latitude,
//           Long: position.coords.longitude,
//         });
//         // map.flyTo({lat: center.Lat, lng: center.Long}, 13)
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }, []);

  return (
    <div className="map-container" >
      <input
        type="number"
        placeholder="Latitude"
        value={center.Lat}
        onChange={(e) => setCenter({ ...center, Lat: e.target.value })}
      />
      <input
        type="number"
        placeholder="Longitude"
        value={center.Long}
        onChange={(e) => setCenter({ ...center, Long: e.target.value })}
      />
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
