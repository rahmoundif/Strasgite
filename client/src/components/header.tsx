import { useTheme } from "../context/ThemeContext";
import NavBar from "./NavBar";
import TranslationButtons from "./TranslationButtons";
import "../App.css";

function Header() {
  const { theme } = useTheme();

  const headerBanner =
    theme === "Europe" ? "/europebanner2.png" : "/desktop_banner.png";

  return (
    <section className="relative w-full flex flex-col h-full">
      <img
        src={headerBanner}
        alt="Bannière"
        className="w-full h-full object-cover"
      />

      {/* Barre de navigation (au-dessus de l'image) */}
      <div className="absolute top-0 inset-x-0 z-50">
        <NavBar
          style={{
            color: "var(--color-accent)",
            backgroundColor: "var(--color-primary)",
          }}
        />
      </div>

      {/* Logo superposé */}
      <div className="absolute inset-x-0 md:top-1/7 mt-5 z-10 flex justify-center px-4">
        <img
          src="/stras_gite_logo.png"
          alt="Logo La Maison Strasbourgeoise"
          className="w-24 h-24 md:w-40 md:h-40 lg:w-60 lg:h-60"
        />
      </div>

      {/* Titre juste sous l’image */}
      <div
        className="w-full md:justify-end text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold md:py-0 py-2 md:flex md:space-x-20 xl:space-x-100"
        style={{
          color: "var(--color-accent)",
          backgroundColor: "var(--color-primary)",
        }}
      >
        <h1 className="md:flex md:flex-row md:items-center md:justify-center  ">
          La Maison Strasbourgeoise
        </h1>

        <div className="hidden md:flex">
          <TranslationButtons />
        </div>

        {/* Navigation principale pour desktop */}
      </div>
    </section>
  );
}

export default Header;
