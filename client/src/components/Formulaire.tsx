import Calendar from "react-calendar";
import { useForm } from "../../src/context/FormContext";
import { useTranslation } from "../context/TranslationContext";

function Formulaire() {
  const {
    showCalendrierDepart,
    showCalendrierArrivee,
    selectDateDepart,
    selectDateArrivee,
    nombreVoyageurs,
    nombreEnfants,
    nombrePmr,
    motif,
    petitDejOui,
    petitDejNon,
    loading,
    setShowCalendrierDepart,
    setShowCalendrierArrivee,
    setSelectDateDepart,
    setSelectDateArrivee,
    handleOnChangeVoyageurs,
    handleOnChangePmr,
    handleOnChangeEnfant,
    handleOnChangeMotif,
    handleOnChangePetitDejNon,
    handleOnChangePetitDejOui,
    handleSubmit,
  } = useForm();

  const { text_translation } = useTranslation();

  return (
    <>
      <form className="flex flex-col bg-[#2c7865] p-6 gap-6 rounded-xl shadow-md">
        <div>
          <label
            htmlFor="motifVoyage"
            className="block mb-2 text-lg font-semibold text-[#f4ebd0]"
          >
            {text_translation("form_motif_label")}
          </label>
          <select
            id="motifVoyage"
            value={motif}
            onChange={handleOnChangeMotif}
            className="bg-white border border-[#d9bf77] text-gray-800 text-base rounded-lg focus:ring-[#d9bf77] focus:border-[#d9bf77] block w-full p-3"
          >
            <option value={"..."} disabled hidden>
              ...
            </option>
            <option value={"Loisir"}>
              {text_translation("form_option_loisir")}
            </option>
            <option value={"Tourisme"}>
              {text_translation("form_option_tourisme")}
            </option>
            <option value={"Professionnel"}>
              {text_translation("form_option_professionnel")}
            </option>
            <option value={"Séance Plénière"}>
              {text_translation("form_option_pleniere")}
            </option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Arrivée"
          className="p-3 bg-white border border-[#d9bf77] text-gray-800 text-base rounded-lg focus:ring-[#d9bf77] focus:border-[#d9bf77] block w-full"
          onClick={() => setShowCalendrierArrivee(!showCalendrierArrivee)}
          value={
            selectDateArrivee ? selectDateArrivee.toLocaleDateString() : ""
          }
          readOnly
        />
        {showCalendrierArrivee && (
          <div>
            <Calendar
              onChange={(date) => {
                setSelectDateArrivee(date as Date);
                setShowCalendrierArrivee(false);
              }}
              value={selectDateArrivee}
            />
          </div>
        )}

        <input
          type="text"
          placeholder="Départ"
          className="p-3 bg-white border border-[#d9bf77] text-gray-800 text-base rounded-lg focus:ring-[#d9bf77] focus:border-[#d9bf77] block w-full"
          onClick={() => setShowCalendrierDepart(!showCalendrierDepart)}
          value={selectDateDepart ? selectDateDepart.toLocaleDateString() : ""}
          readOnly
        />
        {showCalendrierDepart && (
          <div>
            <Calendar
              onChange={(date) => {
                setSelectDateDepart(date as Date);
                setShowCalendrierDepart(false);
              }}
              value={selectDateDepart}
            />
          </div>
        )}

        <div className="flex justify-between items-center bg-white border border-[#d9bf77] text-sm text-gray-800 rounded-lg px-1 py-3 gap-2">
          <label htmlFor="nombreVoyageurs" className="font-medium">
            {text_translation("form_label_adultes")}
          </label>
          <select
            id="nombreVoyageurs"
            value={nombreVoyageurs}
            onChange={handleOnChangeVoyageurs}
            className=""
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <label htmlFor="nombreEnfants" className="font-medium">
            {text_translation("form_label_enfants")}
          </label>
          <select
            id="nombreEnfants"
            value={nombreEnfants}
            onChange={handleOnChangeEnfant}
            className=""
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <label htmlFor="nombrePMR" className="font-medium">
            {text_translation("form_label_pmr")}
          </label>
          <select
            id="nombrePMR"
            value={nombrePmr}
            onChange={handleOnChangePmr}
            className=""
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <section className="mb-2 text-lg font-semibold text-[#f4ebd0]">
          <fieldset>
            <legend className="mb-2 text-center">
              {text_translation("form_breakfast_legend")}
            </legend>
            <div className="flex flex-row items-center justify-center gap-x-4">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id="oui"
                  name="petitdej"
                  value="oui"
                  checked={petitDejOui}
                  onChange={handleOnChangePetitDejOui}
                />
                <label htmlFor="oui">
                  {text_translation("form_checkbox_yes")}
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id="non"
                  name="petitdej"
                  value="non"
                  checked={petitDejNon}
                  onChange={handleOnChangePetitDejNon}
                />
                <label htmlFor="non">
                  {text_translation("form_checkbox_no")}
                </label>
              </div>
            </div>
          </fieldset>
        </section>

        <button
          onClick={handleSubmit}
          type="button"
          className="py-2 bg-[#a84448] hover:bg-[#922f33] rounded-lg text-white text-base font-semibold transition duration-200"
        >
          {loading ? (
            <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            "Rechercher"
          )}
        </button>
      </form>
    </>
  );
}

export default Formulaire;
