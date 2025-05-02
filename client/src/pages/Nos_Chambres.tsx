import { useMemo } from "react";
import RoomCard from "../components/Rooms/RoomCard";
import SearchFilterRooms from "../components/SearchFilterRooms";
import { useForm } from "../context/FormContext";
import { useRooms } from "../context/RoomsContext";

function Nos_Chambres() {
  const rooms = useRooms();
  const { nombreEnfants, nombrePmr, nombreLitsSimples, nombreLitsDoubles } =
    useForm();

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      if (room.kids < nombreEnfants) return false;
      if (nombrePmr > 0 && !room.pmrRoom) return false;
      if (room.sb_n < nombreLitsSimples) return false;
      if (room.db_n < nombreLitsDoubles) return false;
      return true;
    });
  }, [rooms, nombreEnfants, nombrePmr, nombreLitsSimples, nombreLitsDoubles]);

  return (
    <>
      <SearchFilterRooms />
      <section className="m-4 grid lg:grid-cols-3 lg:grid-rows-2 gap-4 opacity-90 lg:mt-20">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => <RoomCard key={room.id} {...room} />)
        ) : (
          <p>Aucune chambre</p>
        )}
      </section>
    </>
  );
}

export default Nos_Chambres;
