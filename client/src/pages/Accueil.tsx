import Avis from "../components/Avis";
import Formulaire from "../components/Formulaire";
import RoomShow from "../components/Rooms/RoomShow";

function Accueil() {
  return (

    <section>
      <div>
        <h1 className="p-2">
          Nichée à deux pas du Parlement européen, sur le quai Mullenheim, notre
          maison d'hôte vous offre un cadre confortable et convivial pour votre
          séjour à Strasbourg. Idéale pour les voyageurs, elle vous permet de
          profiter pleinement de la ville tout en étant proche des institutions
          européennes.
        </h1>
      </div>

      <section className="lg:flex justify-center my-10 place-items-center">
        <div className="px-10">

          <Formulaire />
        </div>


        <RoomShow />

        <div>
          <Avis />
        </div>

      </section>
    </section>
  );
}

export default Accueil;
