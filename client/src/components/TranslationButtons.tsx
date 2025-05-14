import { useTranslation } from "../context/TranslationContext";

function TranslationButtons() {
  const { language, changeLanguage } = useTranslation();

  return (
    <section className="p-4 flex">
      <div >
        <button
          type="button"
          onClick={() => changeLanguage("german")}
          className={`px-2 py-1 w-12 xl:w-15 shadow-2xl xl:shadow-none cursor-pointer ${language === "german" ? "font-bold" : ""}`}
        >
          <img src="/germanflag.svg" alt="german" />
        </button>

        <button
          type="button"
          onClick={() => changeLanguage("french")}
          className={`px-2 py-1 w-12 xl:w-15 shadow-2xl  xl:shadow-none cursor-pointer ${language === "french" ? "font-bold" : ""}`}
        >
          <img src="/franceflag.svg" alt="French" />
        </button>

        <button
          type="button"
          onClick={() => changeLanguage("english")}
          className={`px-2 py-1 w-12 xl:w-15 shadow-2xl  xl:shadow-none cursor-pointer ${language === "english" ? "font-bold" : ""}`}
        >
          <img src="/britflag.svg" alt="English" />
        </button>
      </div>
    </section>
  );
}

export default TranslationButtons;
