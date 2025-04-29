import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Interface pour un marqueur
interface MarkerData {
  position: [number, number];
  popupText: string;
}

// Composant pour définir la vue initiale de la carte
function SetView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);

  return null;
}

function LMap() {
  const center: [number, number] = [48.5876, 7.7622];
  const zoom = 13;

  const markers: MarkerData[] = [
    {
      position: [48.5876, 7.7622],
      popupText: "La Maison Strabourgeoise",
    },
    {
      position: [48.5977, 7.7685],
      popupText: "Parlement européen",
    },
  ];

  return (
    <MapContainer className="w-full h-[500px]">
      <SetView center={center} zoom={zoom} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap"
      />

      {markers.map((marker) => (
        <Marker key={marker.popupText} position={marker.position}>
          <Popup>{marker.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LMap;
