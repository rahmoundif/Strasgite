import Avis from "../components/Avis";
import Formulaire from "../components/Formulaire";
import RoomShow from "../components/Rooms/RoomShow";
import { useTranslation } from "../context/TranslationContext";

function Accueil() {
  const { text_translation } = useTranslation();

  return (
    <section className="px-4">
      {/* Texte d’introduction */}
      <div className="max-w-4xl mx-auto">
        <h1 className="p-2 text-center lg:mt-20 md:mt-15">
          {text_translation("hometext")}
        </h1>
      </div>

      {/* Formulaire + RoomShow côte à côte (centré) */}
      <section className="lg:flex lg:justify-center lg:items-start my-10  max-w-6xl lg:mx-auto">
        <article className="lg:w-1/3 flex justify-center items-center lg:pt-10 ">
          <Formulaire />
        </article>

        <article className="lg:w-2/5 flex justify-center">
          <RoomShow />
        </article>
      </section>

      {/* Avis en-dessous, centrés horizontalement */}
      <section className="flex flex-col justify-center lg:flex items-center gap-5 max-w-6xl mx-auto">
        <Avis />
      </section>
    </section>
  );
}

export default Accueil;
