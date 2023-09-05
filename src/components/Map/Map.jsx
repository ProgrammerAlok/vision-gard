import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.css";
import "leaflet/dist/leaflet.css";
import { database } from "../../firebase/firebase";

const Map = () => {
  const [zoom, setZoom] = useState(10);
  const [center, setCenter] = useState({
    Lat: 22.66247363997702,
    Lng: 88.44767905068652,
  });

  useEffect(() => {
    downloadData()
  }, [center])

  const downloadData = async () => {
    try {
      const res = await (await database.location.get())
      let lat = 0;
      let lng = 0;
      res.forEach((e)=>{
        lat = e?.data()?.Position?._lat
        lng = e?.data()?.Position?._long
      })
      setCenter({Lat: lat, Lng: lng})  
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="map-container" >
      <MapContainer
        center={[center.Lat, center.Lng]}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[center.Lat, center.Lng]}>
          <Popup>
            Latitude : {center.Lat} <br /> Longitude: {center.Lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
