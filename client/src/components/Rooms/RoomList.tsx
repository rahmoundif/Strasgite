import { useRooms } from "../context/RoomsContext";
import RoomCard from "./RoomCard";

function RoomList() {
  const { rooms } = useRooms(); // Acces au rooms du context.

  return (
    <>
      {rooms.map((room) => (
        <RoomCard
          key={room.key}
          title={room.title}
          description={room.description}
          price={room.price}
        />
      ))}
    </>
  );
}

export default RoomList;
