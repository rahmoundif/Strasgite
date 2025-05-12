import { useState } from "react";
import Calendar from "react-calendar";
import { useForm } from "../context/FormContext";

function SearchFilterRooms() {
  const {
    showCalendrierDepart,
    showCalendrierArrivee,
    selectDateDepart,
    selectDateArrivee,
    nombreVoyageurs,
    nombreEnfants,
    nombrePmr,
    petitDejOui,
    petitDejNon,
    setShowCalendrierDepart,
    setShowCalendrierArrivee,
    setSelectDateDepart,
    setSelectDateArrivee,
    handleOnChangeVoyageurs,
    handleOnChangePmr,
    handleOnChangeEnfant,
    handleOnChangePetitDejNon,
    handleOnChangePetitDejOui,
    nombreLitsSimples,
    nombreLitsDoubles,
    handleOnChangeLitsSimples,
    handleOnChangeLitsDoubles,
  } = useForm();

  interface filterModalProps {
    openModalDate: () => void;
    openModalVisitors: () => void;
    openModalBeds: () => void;
  }

  // States ouverture des modals
  const [dateOpen, setDateOpen] = useState(false);
  const [visitorOpen, setVisitorOpen] = useState(false);
  const [bedsOpen, setBedsOpen] = useState(false);

  // condition fermeture des modals

  const Modal: filterModalProps = {
    openModalDate: () => {
      setDateOpen((open) => !open);
      setVisitorOpen(false);
      setBedsOpen(false);
    },
    openModalVisitors: () => {
      setDateOpen(false);
      setShowCalendrierArrivee(false);
      setShowCalendrierDepart(false);
      setVisitorOpen((open) => !open);
      setBedsOpen(false);
    },
    openModalBeds: () => {
      setDateOpen(false);
      setShowCalendrierArrivee(false);
      setShowCalendrierDepart(false);
      setVisitorOpen(false);
      setBedsOpen((open) => !open);
    },
  };

  const formatDate = (d: Date | null) =>
    d ? (
      d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" })
    ) : (
      <p>&#128197;</p>
    );

  //Design du boutton pour activer le modal et design du modal
  const buttonClass = "px-4 py-2 rounded-full ";
  const modalClass =
    "mt-2 p-4 border rounded-lg bg-white shadow-lg absolute z-99";

  return (
    //Design General

    <div className="relative flex  justify-center items-center space-x-4 py-3 cursor-pointer border-2 ">
      {/* Date Section */}

      <section className="relative">
        <div
          className={buttonClass}
          onClick={Modal.openModalDate}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              Modal.openModalDate();
            }
          }}
        >
          <p>&#128197; Dates</p>
        </div>

        {dateOpen && (
          <div className={modalClass} style={{ minWidth: 250 }}>
            {/* Sub Section Arrivée */}

            <article className="">
              <button
                type="button"
                className="w-full text-left text-sm mb-1 hover:underline"
                onClick={() => setShowCalendrierArrivee((open) => !open)}
              >
                Arrivée : {formatDate(selectDateArrivee)}
              </button>
              {showCalendrierArrivee && (
                <Calendar
                  onChange={(value) => {
                    if (value instanceof Date) {
                      setSelectDateArrivee(value);
                      setShowCalendrierArrivee(false);
                      setDateOpen(false);
                    }
                  }}
                  value={selectDateArrivee || new Date()}
                />
              )}
            </article>

            {/* Sub Section Départ */}

            <article className="mb-3">
              <button
                type="button"
                className="w-full text-left text-sm mb-1 hover:underline"
                onClick={() => setShowCalendrierDepart((open) => !open)}
              >
                Départ : {formatDate(selectDateDepart)}
              </button>

              {showCalendrierDepart && (
                <Calendar
                  onChange={(value) => {
                    if (value instanceof Date) {
                      setSelectDateDepart(value);
                      setShowCalendrierDepart(false);
                      setDateOpen(false);
                    }
                  }}
                  value={selectDateDepart || new Date()}
                />
              )}
            </article>
          </div>
        )}
      </section>

      {/* Section Visiteurs */}

      <div className="relative">
        <div
          className={buttonClass}
          onClick={Modal.openModalVisitors}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              Modal.openModalVisitors();
            }
          }}
        >
          Visiteurs
        </div>
        {visitorOpen && (
          <div className={modalClass} style={{ minWidth: 150 }}>
            {/* Partie Adulte */}

            <div className="mb-3">
              <label htmlFor="adultes-select" className="block text-sm mb-1">
                Adulte
              </label>
              <select
                id="adultes-select"
                value={nombreVoyageurs}
                onChange={handleOnChangeVoyageurs}
                className="w-full border rounded px-2 py-1"
              >
                {[1, 2, 3].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>

            {/* Partie enfants */}

            <div className="mb-3">
              <label htmlFor="enfants-select" className="block text-sm mb-1">
                Enfant
              </label>
              <select
                id="enfants-select"
                value={nombreEnfants}
                onChange={handleOnChangeEnfant}
                className="w-full border rounded px-2 py-1"
              >
                {[0, 1, 2].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>

            {/* Partie PMR */}

            <div>
              <label htmlFor="pmr-select" className="block text-sm mb-1">
                PMR
              </label>
              <select
                id="pmr-select"
                value={nombrePmr}
                onChange={handleOnChangePmr}
                className="w-full border rounded px-2 py-1"
              >
                {[0, 1, 2].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Section Lits */}

      <section className="relative">
        <div
          className={buttonClass}
          onClick={Modal.openModalBeds}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              Modal.openModalBeds();
            }
          }}
        >
          Couchages
        </div>

        {/* Lits Simple */}

        {bedsOpen && (
          <div className={modalClass} style={{ minWidth: 120 }}>
            <div className="mb-3">
              <label htmlFor="lits-simples" className="block text-sm mb-1">
                Lits simples
              </label>
              <select
                id="lits-simples"
                value={nombreLitsSimples}
                onChange={handleOnChangeLitsSimples}
                className="w-full border rounded px-2 py-1"
              >
                {[0, 1, 2].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>

            {/* Lit doubles */}

            <div>
              <label htmlFor="lits-doubles" className="block text-sm mb-1">
                Lits doubles
              </label>
              <select
                id="lits-doubles"
                value={nombreLitsDoubles}
                onChange={handleOnChangeLitsDoubles}
                className="w-full border rounded px-2 py-1"
              >
                {[0, 1, 2].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </section>

      <div>
        <label className="inline-flex items-center ">
          <input
            type="radio"
            name="petitDej"
            checked={petitDejOui}
            onChange={handleOnChangePetitDejOui}
            className="mr-2"
          />{" "}
          Oui
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="petitDej"
            checked={petitDejNon}
            onChange={handleOnChangePetitDejNon}
            className="mr-2"
          />{" "}
          Non
        </label>
      </div>
    </div>
  );
}

export default SearchFilterRooms;
