import RoomList from "../components/Rooms/RoomList";
import { RoomsProvider } from "../components/context/RoomsContext";

function Nos_Chambres() {
  return (
    <>
      <RoomsProvider>
        <section className="m-4 grid lg:grid-cols-3 lg:grid-row-2 gap-4 opacity-90 lg:mt-20">
          <RoomList />
        </section>
      </RoomsProvider>
    </>
  );
}

export default Nos_Chambres;
