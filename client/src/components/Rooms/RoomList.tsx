import { useRooms } from "../../context/RoomsContext";
import RoomCard from "./RoomCard";

function RoomList() {
  const rooms = useRooms(); // Acces au rooms du context.

  return (
    <>
      {rooms.map((Room) => (
        <RoomCard
          key={Room.id}
          imageUrl={Room.imageUrl}
          title={Room.title}
          description={Room.description}
          price={Room.price}
          kids={Room.kids}
          doubleBed={Room.doubleBed}
          db_n={Room.db_n}
          singleBed={Room.singleBed}
          sb_n={Room.sb_n}
          pmrRoom={Room.pmrRoom}
        />
      ))}
    </>
  );
}

export default RoomList;
