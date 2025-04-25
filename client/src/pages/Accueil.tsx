import Avis from "../components/Avis";
import Formulaire from "../components/Formulaire";

function Accueil() {
  return (
    <>
      <section>
        <div>
          <h1 className="p-4  md:mt-15">
            Nichée à deux pas du Parlement européen, sur le quai Mullenheim,
            notre maison d'hôte vous offre un cadre confortable et convivial
            pour votre séjour à Strasbourg. Idéale pour les voyageurs, elle vous
            permet de profiter pleinement de la ville tout en étant proche des
            institutions européennes.
          </h1>
        </div>
        <div className="px-5 py-10">
          <Formulaire />
        </div>
        <div>
          <Avis />
        </div>
      </section>
    </>
  );
}

export default Accueil;
