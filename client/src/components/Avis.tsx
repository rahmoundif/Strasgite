import RatingStars from "./RatingStars";

function Avis() {
  return (
    <>
      <section className="md:flex lg:flex flex-col">
        <section className="flex flex-col p-5 gap-5 m-5 rounded-md shadow-md bg-white">
          <RatingStars />
          <div className="flex">
            <img
              src="/avatar_f_asiatique.png"
              alt="avatar_photo"
              className="h-20 w-20"
            />
            <div>
              <h2 className="text-[#6d6d6d] font-bold text-xl flex justify-between pl-2">
                Kate Thalwyn
                <img src="/britflag.svg" alt="britishflag" className="h-5" />
              </h2>
              <p className="text-[#969494] text-xs italic pl-2">
                "A perfect stay: warm welcome, beautiful setting, and a true
                sense of well-being. We'll definitely come back!"
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col p-5 gap-5 m-5 rounded-md shadow-md bg-white">
          <RatingStars />
          <div className="flex">
            <img
              src="/avatar_h_noir.png"
              alt="avatar_photo"
              className="h-20 w-20"
            />
            <div>
              <h2 className="text-[#6d6d6d] font-bold text-xl flex justify-between pl-2">
                Dave Lopp
                <img src="/germanflag.svg" alt="germanflag" className="h-5" />
              </h2>
              <p className="text-[#969494] text-xs italic pl-2">
                "Super Aufenthalt! Komfort, Ruhe und ein herzliches Willkommen –
                es hat nur das gewisse Etwas gefehlt, um perfekt zu sein.""
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col p-5 gap-5 m-5 rounded-md shadow-md bg-white">
          <RatingStars />
          <div className="flex">
            <img
              src="/avatar_h_blanc.png"
              alt="avatar_photo"
              className="h-20 w-20"
            />
            <div>
              <h2 className="text-[#6d6d6d] font-bold text-xl flex justify-between pl-2">
                Paul Source
                <img src="/franceflag.svg" alt="franceflag" className="h-5" />
              </h2>
              <p className="text-[#969494] text-xs italic pl-2">
                Séjour parfait ! Accueil chaleureux, cadre agréable et tout le
                confort nécessaire. À refaire sans hésiter !
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Avis;
