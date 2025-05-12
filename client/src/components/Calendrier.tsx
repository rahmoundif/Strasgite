import Calendar from "react-calendar";
import { useCalendar } from "../context/CalendarContext";

function Calendrier() {
  const {
    selectedDate,
    showAlert,
    showValidation,
    loading,
    setShowAlert,
    handleValidation,
    handleChange,
    loadDatesFromStorage,
    isDateDesactivee,
  } = useCalendar();

  return (
    <div>
      {/* Bouton pour vérifier les disponibilités et charger les dates */}
      <div className="mb-4 text-center">
        <button
          type="button"
          onClick={loadDatesFromStorage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Vérifier les disponibilités
        </button>
      </div>

      {/* Calendrier */}
      <Calendar
        tileDisabled={({ date, view }) =>
          view === "month" && isDateDesactivee(date)
        }
        tileClassName={({ date, view }) =>
          view === "month" && isDateDesactivee(date) ? "tile-desactivee" : null
        }
        navigationLabel={({ label }) => <span>{label}</span>}
        goToRangeStartOnSelect
        selectRange
        minDate={new Date(2025, 0, 1)}
        maxDate={new Date(2026, 11, 31)}
        onChange={handleChange}
        value={selectedDate}
      />

      {/* affichage alerte erreur date */}

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#2c7865]/70 z-50">
          <div className="bg-[#f4ebd0] p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <p className="text-gray-800 mb-4">
              <b>Alerte</b> : Votre sélection inclut une ou plusieurs dates déjà
              réservées. Veuillez ajuster vos dates de réservation.
            </p>
            <button
              type="button"
              onClick={() => setShowAlert(false)}
              className="mt-2 px-4 py-2 bg-[#2c7865] text-white rounded hover:bg-red-700 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* CAffichage bouton validation de réservation */}

      {showValidation && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={handleValidation}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center justify-center gap-2 min-w-[200px]"
          >
            {loading ? (
              <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              "Valider la réservation"
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default Calendrier;
