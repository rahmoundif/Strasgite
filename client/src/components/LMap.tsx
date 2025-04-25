import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MarkerData {
  position: [number, number];
  popupText: string;
}

const LMap = () => {
  const center: [number, number] = [48.587634520914676, 7.762212068056825];
  const zoom: number = 13;

  const markers: MarkerData[] = [
    {
      position: [48.587634520914676, 7.762212068056825],
      popupText: "StrasGite",
    },
    {
      position: [48.597699784759264, 7.768581057462948],
      popupText: "Parlement européen",
    },
  ];

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {markers.map((marker) => (
        <Marker
          key={`${marker.position[0]}-${marker.position[1]}`}
          position={marker.position}
        >
          <Popup>{marker.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LMap;
