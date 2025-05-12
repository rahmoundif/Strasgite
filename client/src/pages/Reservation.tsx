import Calendrier from "../components/Calendrier";
import Formulaire from "../components/Formulaire";

function Reservation() {
  return (
    <>
      <div className="px-5 py-10">
        <Formulaire />
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
