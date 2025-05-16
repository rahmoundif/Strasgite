import Calendar from "react-calendar";
import { useCalendar } from "../context/CalendarContext";
import { useTranslation } from "../context/TranslationContext";

// Fonction utilitaire : format YYYY-MM-DD sans UTC
function formatDate(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

// Génère toutes les dates entre start et end incluses
function generateFormattedRange(start: Date, end: Date): string[] {
  const range: string[] = [];
  const cur = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  while (cur <= endDate) {
    range.push(formatDate(cur));
    cur.setDate(cur.getDate() + 1);
  }

  return range;
}

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
    isDateDesactivee,
  } = useCalendar();

  // Calcule les dates à surligner
  let selectedRange: string[] = [];
  if (Array.isArray(selectedDate)) {
    const [start, end] = selectedDate;
    if (start instanceof Date && end instanceof Date) {
      selectedRange = generateFormattedRange(start, end);
    }
  }

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
        tileClassName={({ date, view }) => {
          if (view !== "month") return;
          const formatted = formatDate(date);

          if (isDateDesactivee(date)) return "tile-desactivee";
          if (selectedRange.includes(formatted)) return "tile-selected";
        }}
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
        <div className="mt-4 flex justify-center text-center">
          <button
            type="button"
            onClick={handleValidation}
            className="px-4 py-2 bg-[#a84448] hover:bg-[#922f33] text-white rounded transition flex items-center justify-center min-w-[200px]"
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
