import Calendrier from "../components/Calendrier";
import Formulaire from "../components/Formulaire";
import { useTranslation } from "../context/TranslationContext";

function Reservation() {
  const { text_translation } = useTranslation();
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-5 text-[#2c7865]">
        {text_translation("reservation_h1")}
      </h1>

      <div className="px-5 py-10">
        <Formulaire />
      </div>

      <div className="px-5 py-10">
        <Calendrier />
      </div>

      <div className="mb-4 text-center text-sm text-[#2c7865]">
        <p>{text_translation("reservation_instr1")}</p>
        <p>{text_translation("reservation_instr2")}</p>
      </div>
    </>
  );
}

export default Reservation;
