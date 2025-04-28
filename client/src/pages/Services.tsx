import { Link } from "react-router";

import CartesServices from "../components/CartesServices";
import LMap from "../components/LMap";

function Services() {
  return (
    <div className="container mx-auto px-4  sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl mb-12 sm:text-3xl lg:text-4xl font-semibold text-center mb-6">
        <span className="text-[#2c7865]">
          {" "}
          StrasGite - Votre maison d'hôtes
        </span>
      </h1>
      <p className="text-lg text-gray-700 mb-12 text-justify">
        StrasGite est une maison d’hôtes unique située sur le Quai Mullenheim,
        au cœur de Strasbourg. Offrant un cadre paisible et raffiné, nous
        mettons à votre disposition des chambres d’hôtes idéales pour les
        voyageurs en quête de confort et de tranquillité.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#2c7865] mb-4">
          Nos Chambres
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          Chacune de nos chambres est soigneusement aménagée pour offrir une
          expérience de séjour exceptionnelle. Que ce soit pour une escapade
          romantique, un voyage d'affaires ou un séjour prolongé, StrasGite
          offre un hébergement haut de gamme.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#2c7865] mb-4">
          Un Emplacement Privilégié
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-justify ">
          Située à quelques minutes du centre-ville de Strasbourg, découvrez la
          beauté de la ville tout en profitant d'un cadre calme et relaxant.
          Notre maison d'hôtes est facilement accessible depuis les principales
          attractions touristiques, les restaurants et les boutiques.
        </p>
        <LMap />
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-[#2c7865] mb-4">
          Une offre fidélité pour les parlementaires
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-justify">
          Notre maison d'hôtes est l'endroit idéal pour les parlementaires
          européens et les voyageurs d'affaires. Profitez de notre proximité
          avec les institutions européennes et de notre cadre calme pour allier
          travail et détente.
        </p>
      </section>

      <CartesServices />

      <div className="text-center">
        <Link
          to="/reservation"
          className="inline-block py-3 px-6 bg-[#2c7865] text-[#E2B846] text-lg font-semibold rounded-lg shadow-lg hover:bg-[#1d5b49] transition"
        >
          Réservez maintenant
        </Link>
      </div>
    </div>
  );
}

export default Services;
