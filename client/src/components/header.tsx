import NavBar from "./NavBar";

function Header() {
  return (
    <section className="relative flex flex-col items-center h-auto w-full min-h-70 md:min-h-100 lg:min-h-150">
      {/* Image de fond */}
      <img
        src="/desktop_banner.png"
        alt="Bannière"
        className="w-full h-full object-cover z-0"
      />

      {/* Barre de navigation */}
      <div className="absolute z-50 top-0 w-full">
        <NavBar />
      </div>

      {/* Contenu principal */}
      <div className="absolute z-10 w-full text-center">
        <div className="flex flex-col items-center gap-17.5 md:gap-43 lg:gap-66 ">
          {/* Logo */}
          <img
            src="/stras_gite_logo.png"
            alt="Logo La Maison Strasbourgeoise"
            className="mt-8 md:mt-20 lg:mt-35 w-25 h-25 md:w-50 md:h-50 lg:w-75 lg:h-75 mb-4"
          />

          {/* Titre */}
          <h1 className="text-2xl text-[#d9bf77] bg-[#2c7865] md:text-4xl lg:text-6xl py-1 px-2 w-full">
            La Maison Strasbourgeoise
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Header;
