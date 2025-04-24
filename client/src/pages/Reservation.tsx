import Calendrier from "../components/Calendrier";
import FormProvisoire from "../components/Formprovisoire";

function Reservation() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-5 text-[#2c7865]">
        Reservation
      </h1>

      <div className="px-5 py-10">
        <FormProvisoire />
      </div>

      <div className="px-5 py-10">
        <Calendrier />
      </div>
      <div className="mb-4 text-center text-sm text-[#2c7865]">
        <p>
          Sélectionnez votre période de réservation en cliquant sur une date de
          début et une date de fin.
        </p>
        <p>
          Les dates grisées sont déjà réservées et ne peuvent pas être
          sélectionnées sur cette chambre.
        </p>
      </div>
    </>
  );
}

export default Reservation;
