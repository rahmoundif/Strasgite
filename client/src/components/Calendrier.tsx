import Calendar from "react-calendar";
import { useCalendar } from "../context/CalendarContext";
import { useTranslation } from "../context/TranslationContext";
//import { useForm } from "../context/FormContext";

function Calendrier() {
  const { text_translation } = useTranslation();
  //const {handleSubmit} = useForm();
  const {
    selectedDate,
    showAlert,
    showValidation,
    loading,
    setShowAlert,
    handleValidation,
    handleChange,
    isDateDesactivee,
  } = useCalendar();

  return (
    <div>
      {/* Calendrier */}
      <Calendar
        onChange={handleChange}
        value={selectedDate}
        selectRange
        minDate={new Date(2025, 0, 1)}
        maxDate={new Date(2026, 11, 31)}
        tileDisabled={({ date, view }) =>
          view === "month" && isDateDesactivee(date)
        }
        tileClassName={({ date, view }) =>
          view === "month" && isDateDesactivee(date)
            ? "tile-desactivee"
            : undefined
        }
      />

      {/* Alerte */}
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

      {/* Bouton Valider */}
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
