import NavBar from "./NavBar";

function Header() {
  return (
    <section className="relative flex flex-row-reverse bg-[url('/desktop_banner.png')] h-full w-full bg-contain md:bg-cover md:bg-center bg-no-repeat min-h-70 md:min-h-100 bg-top lg:min-h-150 ">
      <div className=" mb:absolute relative z-50">
        <NavBar />
      </div>
      <section className="absolute w-full z-0">
        <div className="flex flex-col items-center text-center mt-13 gap-21 md:mt-18 md:gap-32 lg:mt-30 lg:gap-55 w-full ">
          <img
            src="/stras_gite_logo.png"
            alt="Logo La Maison Strasbourgeoise"
            className="h-20 md:h-40 lg:h-65"
          />
          <div className="w-full">
            <h1 className="text-2xl text-[#d9bf77] bg-[#2c7865] md:text-4xl lg:text-6xl">
              La Maison Strasbourgeoise
            </h1>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Header;
