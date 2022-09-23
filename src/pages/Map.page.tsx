import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  GeoJSON,
  Polygon,
  useMapEvents,
  useMapEvent,
} from "react-leaflet";
import { Log } from "src/types/log.type";
import { Partfield } from "src/types/partfield.type";
import { Soilmap } from "src/types/soilmap.type";

function SetViewOnClick() {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: true,
    });
  });

  return null;
}

export function Map() {
  const [soilmap, setSoilmap] = useState<Soilmap | null>(null);
  const [partfield, setPartfield] = useState<Partfield | null>(null);
  // const [log, setLog] = useState<Log | null>(null);
  const [center, setCenter] = useState<LatLngExpression>([49.669, 4.969]);

  useEffect(() => {
    fetch("server/soilmap.json")
      .then((res) => res.json())
      .then((data) => setSoilmap(data));

    fetch("server/partfield.json")
      .then((res) => res.json())
      .then((data) => setPartfield(data));

    // fetch("server/log.json")
    //   .then((res) => res.json())
    //   .then((data) => setLog(data));
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{ width: "100%", height: "100vh" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      {soilmap &&
        soilmap.data.features.map((f1) =>
          f1.features.map((f2) => <GeoJSON key={f2.properties.id} data={f2} />)
        )}

      {partfield &&
        partfield.items.map((i) => (
          <GeoJSON
            key={i.id}
            data={i.boundaries}
            onEachFeature={(features, layer) => {
              layer
                .bindPopup(
                  `<p>
            Available maps : <br/>
            Type: 
            </p>`
                )
                .on("click", (e) => {
                  setCenter(e.latlng);
                });
            }}
          />
        ))}
      <SetViewOnClick />

      {/* {log && <GeoJSON data={log.data} />} */}
    </MapContainer>
  );
}
