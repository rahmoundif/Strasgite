interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Accès Parking",
    description: "Parking de notre Maison disponible.",
  },
  {
    title: "Petit déjeuner",
    description:
      "Petit déjeuner maison sur demande, avec produits locaux. Tarif : 15€ par personne. Service de 7h à 10h.",
  },
  {
    title: "Équipements bébé",
    description:
      "Lit bébé, chaise haute, chauffe-biberon, matelas à langer et baignoire à disposition.",
  },
  {
    title: "Jardin",
    description: "Profitez du calme dans notre jardin verdoyant jusqu'à 23h.",
  },
  {
    title: "Service traiteur",
    description:
      "Service traiteur sur demande aux déjeuners et diners, nous nous adaptons aux régimes particuliers.",
  },

  {
    title: "Wi-Fi inclus",
    description: "Connexion internet gratuite, sécurisée dans toute la maison.",
  },
  {
    title: "Local vélo sécurisé",
    description: "Un espace fermé pour ranger vos vélos en toute sécurité.",
  },
  {
    title: "Check-in & Check-out",
    description:
      "Arrivée autonome possible, horaires flexibles. Les chambres sont disponibles dès 16h et doivent être libérées à 10h.",
  },
  {
    title: "Produits d'accueil",
    description: "Articles de toilette, kit hygiène à disposition.",
  },
  {
    title: "Écoresponsabilité",
    description:
      "Tri sélectif, réduction plastique, produits locaux et bio privilégiés.",
  },
  {
    title: "Ménage",
    description: "Service de ménage quotidien pour un séjour agréable.",
  },
  {
    title: "Conciergerie",
    description: "Service de conciergerie pour répondre à vos besoins.",
  },
];

function CartesServices() {
  return (
    <section className="py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl  sm:text-3xl font-bold text-center text-[#2c7865] mb-10">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md border border-[#E2B846] p-4 sm:p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#2c7865] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartesServices;
