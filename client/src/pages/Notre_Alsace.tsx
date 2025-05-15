function NotreAlsace() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Notre Alsace
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        À moins de 30 km de Strasbourg, vivez des expériences inoubliables à
        partager en famille, entre amis ou en amoureux.
      </p>

      {/* Section En famille */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-green-700">🌿 En famille</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-6 items-start mt-5 border-1 border-gray-400 rounded-lg p-4 shadow-xl h-38">
            <img
              src="https://www.faunesauvage.fr/wp-content/uploads/2020/11/parc_sainte_croix.jpg"
              alt="Parc Animalier de Sainte-Croix"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://parcsaintecroix.com"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Parc Animalier de Sainte-Croix
              </a>
              <p className="text-sm text-gray-700">
                Une journée au plus près des animaux dans un environnement
                naturel.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start md:mt-20 border-1 border-gray-400 rounded-lg p-4 shadow-xl">
            <img
              src="https://cos64.fr/photo/europapark.jpg"
              alt="Europa Park"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.europapark.de"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Europa Park (Rust, DE)
              </a>
              <p className="text-sm text-gray-700">
                Le célèbre parc d’attractions ravira petits et grands.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start border-1 border-gray-400 rounded-lg p-4 shadow-xl h-38">
            <img
              src="https://www.levaisseau.com/media/8699/jefabriquelechantiervsojs0062-12.jpg"
              alt="Le Vaisseau Strasbourg"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.levaisseau.com"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Le Vaisseau
              </a>
              <p className="text-sm text-gray-700">
                Musée interactif où science et jeu se rencontrent.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start md:mt-20 border-1 border-gray-400 rounded-lg p-4 shadow-xl">
            <img
              src="https://www.montagnedessinges.com/wp-content/uploads/2023/03/logo-1-2.png"
              alt="Montagne des Singes"
              className="w-30 h-45 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.montagnedessinges.com"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                La Montagne des Singes
              </a>
              <p className="text-sm text-gray-700">
                Promenade fascinante au milieu des macaques de Barbarie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Entre amis */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-yellow-700">
          🍻 Entre amis
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-6 items-start border-1 border-gray-400 rounded-lg p-4 shadow-xl h-38">
            <img
              src="https://www.john-doe.fr/wp-content/uploads/2023/09/INSTAGRAM-2-1.jpg"
              alt="Escape Game Strasbourg"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.john-doe.fr/strasbourg/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Escape Game Strasbourg
              </a>
              <p className="text-sm text-gray-700">
                Plusieurs salles à thème pour relever des défis ensemble.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start border-1 border-gray-400 rounded-lg p-4 shadow-xl mt-20">
            <img
              src="https://routedesvins89.fr/wp-content/uploads/2018/05/route-vin-alsace-0.jpg"
              alt="Route des Vins"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.routedesvins.alsace"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                La Route des Vins d’Alsace
              </a>
              <p className="text-sm text-gray-700">
                Découverte des caves et dégustations dans les villages
                pittoresques.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start border-1 border-gray-400 rounded-lg p-4 shadow-xl h-38">
            <img
              src="https://www.mon-week-end-en-alsace.com/app/uploads/2019/06/anoe-kayak-strasbourg.jpg"
              alt="Balade VTT Kayak"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.strasbourgeauxvives.org/site/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                VTT ou kayak sur l’Ill
              </a>
              <p className="text-sm text-gray-700">
                Activités sportives et fun en pleine nature.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start border-1 border-gray-400 rounded-lg p-4 shadow-xl mt-20">
            <img
              src="https://www.trampolinepark.fr/repository/image/offres/park-thumb-entreprise-ce.jpg"
              alt="Trampoline Bowling Geispolsheim"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.trampolinepark.fr/strasbourg-geispolsheim"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Bowling & Trampoline Park Geispolsheim
              </a>
              <p className="text-sm text-gray-700">
                Rires garantis pour une soirée dynamique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section En couple */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-pink-700">❤️ En couple</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-6 items-start border-1 border-gray-400 rounded-lg p-4 shadow-xl h-38">
            <img
              src="https://apps.tourisme-alsace.info/photos/strasbourg/photos/223009094_1.jpg"
              alt="Parc Orangerie"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.strasbourg.eu/lieu/-/entity/sig/2305_ENV_372/parc-de-l-orangerie"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Parc de l'Orangerie
              </a>
              <p className="text-sm text-gray-700">
                Cadre romantique, cygnes, barques et petit zoo.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start border-1 border-gray-400 rounded-lg p-4 shadow-xl mt-20">
            <img
              src="https://bulletindescommunes.net/wp-content/uploads/2021/04/bain.jpg"
              alt="bains municipaux strasbourg"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.bainsmunicipauxdestrasbourg.fr/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Centre de bien-être et soin dans un batiment classé monument
                historique.
              </a>
              <p className="text-sm text-gray-700">
                Parenthèse détente à Strasbourg.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start border-1 border-gray-400 rounded-lg p-4 shadow-xl h-38">
            <img
              src="https://static.wixstatic.com/media/0d1b4e_27bac5b17c904eb8ae6d1fc35535fd8d~mv2.png"
              alt="Dîner au bateau du Rhin"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.bateaudurhin.fr/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Dîner au bateau du Rhin
              </a>
              <p className="text-sm text-gray-700">
                Un moment hors du temps sur l’eau en plein centre-ville.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start border-1 border-gray-400 rounded-lg p-4 shadow-xl mt-20">
            <img
              src="https://www.rue89strasbourg.com/wp-content/uploads/2015/07/Capture-d%E2%80%99%C3%A9cran-2015-07-24-%C3%A0-15.39.33.png"
              alt="Forteresse Frere"
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div>
              <a
                href="https://www.fort-frere.eu"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                Forteresse de Mutzig
              </a>
              <p className="text-sm text-gray-700">
                Pour les passionnés d’histoire et de découvertes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <p className="mt-12 text-center text-sm text-gray-500">
        Retrouvez encore plus d’idées à l’accueil ou contactez-nous pour des
        conseils personnalisés à la réception !
      </p>
    </div>
  );
}
export default NotreAlsace;
