import Avis from "../components/Avis";
import Formulaire from "../components/Formulaire";
import RoomShow from "../components/Rooms/RoomShow";

function Accueil() {
  return (
    <section className="px-4">
      {/* Texte d’introduction */}
      <div className="max-w-4xl mx-auto">
        <h1 className="p-2 text-center lg:mt-20 md:mt-15">
          Nichée à deux pas du Parlement européen, sur le quai Mullenheim, notre
          maison d'hôte vous offre un cadre confortable et convivial pour votre
          séjour à Strasbourg. Idéale pour les voyageurs, elle vous permet de
          profiter pleinement de la ville tout en étant proche des institutions
          européennes.
        </h1>
      </div>

      {/* Formulaire + RoomShow côte à côte (centré) */}
      <section className="lg:flex lg:justify-center lg:items-start my-10 gap-10 max-w-6xl mx-auto">
        <div className="lg:w-1/3 flex justify-center">
          <Formulaire />
        </div>

        <div className="lg:w-2/3 flex justify-center">
          <RoomShow />
        </div>
      </section>

      {/* Avis en-dessous, centrés horizontalement */}
      <section className="flex flex-col justify-center lg:flex items-center gap-5 max-w-6xl mx-auto">
        <Avis />
      </section>
    </section>
  );
}

export default Accueil;
