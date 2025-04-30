import NavBar from "./NavBar";

function Header() {
  return (
    <section className="relative w-full flex flex-col h-[70vh] md:h-[100vh] lg:h-[120vh] xl:h-[140vh]">
      {/* Image de fond */}
      <img
        src="/desktop_banner.png"
        alt="Bannière"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Barre de navigation */}
      <div className="absolute top-0 inset-x-0 z-50">
        <NavBar />
      </div>

      {/* Logo */}
      <div className="absolute inset-x-0 top-1/3 z-10 flex justify-center px-4">
        <img
          src="/stras_gite_logo.png"
          alt="Logo La Maison Strasbourgeoise"
          className="w-25 h-25 md:w-50 md:h-50 lg:w-50 lg:h-50 xl:w-70 xl:h-70"
        />
      </div>

      {/* Titre collé en bas et full width */}
      <div className="absolute bottom-0 inset-x-0 z-20">
        <h1 className="w-full text-center text-xl md:text-2xl lg:text-4xl xl:text-6xl font-semibold text-[#d9bf77] bg-[#2c7865]/80 py-4">
          La Maison Strasbourgeoise
        </h1>
      </div>
    </section>
  );
}

export default Header;
