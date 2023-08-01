import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { MapProps } from "../../model";

const Map: React.FC<MapProps> = ({ data }) => {
  const center: LatLngTuple = [20, 0];
  return (
    <MapContainer
      center={center}
      zoom={2}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {data.map((countryData) => (
        <Marker
          key={countryData.country}
          position={[countryData.countryInfo.lat, countryData.countryInfo.long]}
        >
          <Popup>
            <div>
              <h3>{countryData.country}</h3>
              <p>Total Cases: {countryData.cases}</p>
              <p>Total Deaths: {countryData.deaths}</p>
              <p>Total Recovered: {countryData.recovered}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
