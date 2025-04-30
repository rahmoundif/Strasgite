import { useRooms } from "../context/RoomsContext";
import RoomCard from "./RoomCard";

function RoomList() {
  const { rooms } = useRooms(); // Acces au rooms du context.

  return (
    <>
      {rooms.map((room) => (
        <RoomCard
          key={room.key}
          imageUrl={room.imageUrl}
          title={room.title}
          description={room.description}
          price={room.price}
          kids={room.kids}
          doubleBed={room.doubleBed}
          db_n={room.db_n}
          singleBed={room.singleBed}
          sb_n={room.sb_n}
          pmrRoom={room.pmrRoom}
        />
      ))}
    </>
  );
}

export default RoomList;
