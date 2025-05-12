import Calendar from "react-calendar";
import { useCalendar } from "../context/CalendarContext";
import { useTranslation } from "../context/TranslationContext";

function Calendrier() {
  const { text_translation } = useTranslation();

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
      {/* Bouton pour vérifier les disponibilités */}
      <div className="mb-4 text-center">
        <button
          type="button"
          onClick={loadDatesFromStorage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {text_translation("calendrier_btn_check")}
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

      {/* Alerte sélection */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#2c7865]/70 z-50">
          <div className="bg-[#f4ebd0] p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <p className="text-gray-800 mb-4">
              <b>{text_translation("calendrier_alert_title")}</b> :{" "}
              {text_translation("calendrier_alert_message")}
            </p>
            <button
              type="button"
              onClick={() => setShowAlert(false)}
              className="mt-2 px-4 py-2 bg-[#2c7865] text-white rounded hover:bg-red-700 transition"
            >
              {text_translation("calendrier_btn_close")}
            </button>
          </div>
        </div>
      )}

      {/* Bouton validation de réservation */}
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
              text_translation("calendrier_btn_validate")
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default Calendrier;
