import React, { useMemo } from "react";
import { useForm } from "../../context/FormContext";
import { useRooms } from "../../context/RoomsContext";
import RoomCard from "./RoomCard";

const RoomList: React.FC = () => {
  const rooms = useRooms();
  const { nombreEnfants, nombrePmr, nombreLitsSimples, nombreLitsDoubles } =
    useForm();

  // Filtrage des chambres selon les critères du formulaire
  const filteredRooms = useMemo(
    () =>
      rooms.filter(
        (room) =>
          room.kids >= nombreEnfants &&
          (nombrePmr > 0 ? room.pmrRoom : true) &&
          room.sb_n >= nombreLitsSimples &&
          room.db_n >= nombreLitsDoubles,
      ),
    [rooms, nombreEnfants, nombrePmr, nombreLitsSimples, nombreLitsDoubles],
  );

  if (filteredRooms.length === 0) {
    return <p>Aucune chambre ne correspond à vos critères.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRooms.map((room) => (
        <RoomCard room={room} key={room.id} />
      ))}
    </div>
  );
};

export default React.memo(RoomList);
