import { useState } from "react";
import Calendar from "react-calendar";
import "../App.css";

// Types pour la gestion d'une date ou d'une plage de dates
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendrier() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [showAlert, setShowAlert] = useState(false);

  // Exemple de dates à désactiver
  const datesDesactivees = [
    new Date(2025, 4, 5), //Sceance plénière Mai
    new Date(2025, 4, 6),
    new Date(2025, 4, 7),
    new Date(2025, 4, 8), //fin Sceance plénière Mai
    new Date(2025, 4, 10), // 10 mai 2025
    new Date(2025, 4, 15), // 15 mai 2025
    new Date(2025, 5, 2), //Sceance plénière Juin
    new Date(2025, 5, 3),
    new Date(2025, 5, 4),
    new Date(2025, 5, 5), //fin Sceance plénière Juin
    new Date(2025, 6, 7), //Sceance plénière Juillet
    new Date(2025, 6, 8),
    new Date(2025, 6, 9),
    new Date(2025, 6, 10), //fin Sceance plénière Juillet
    new Date(2025, 8, 8), //Sceance plénière Septembre
    new Date(2025, 8, 9),
    new Date(2025, 8, 10),
    new Date(2025, 8, 11), //fin Sceance plénière Septembre
    new Date(2025, 9, 6), //Sceance plénière Octobre
    new Date(2025, 9, 7),
    new Date(2025, 9, 8),
    new Date(2025, 9, 9), //fin Sceance plénière Octobre
  ];

  const isDateDesactivee = (date: Date): boolean => {
    return datesDesactivees.some(
      (d) => d.toDateString() === date.toDateString(),
    );
  };

  const handleChange = (value: Value) => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      if (start && end) {
        const currentDate = new Date(start);
        while (currentDate <= end) {
          if (isDateDesactivee(currentDate)) {
            setSelectedDate(null);
            setShowAlert(true);
            return;
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
    } else {
      if (value && isDateDesactivee(value)) {
        setSelectedDate(null);
        setShowAlert(true);
        return;
      }
    }
    setSelectedDate(value);
  };

  return (
    <div className="">
      <Calendar
        tileDisabled={({ date, view }) =>
          view === "month" && isDateDesactivee(date)
        }
        tileClassName={({ date, view }) =>
          view === "month" && isDateDesactivee(date) ? "tile-desactivee" : null
        }
        navigationAriaLabel="Navigation du calendrier"
        navigationLabel={({ label }) => <span>{label}</span>}
        goToRangeStartOnSelect={true}
        selectRange={true}
        minDate={new Date(2025, 0, 1)}
        maxDate={new Date(2026, 11, 31)}
        onChange={handleChange}
        value={selectedDate}
        nextAriaLabel="Aller au mois suivant"
        nextLabel="Mois Suivant >"
        prevAriaLabel="Aller au mois précédent"
        prevLabel="< Mois précédent"
      />

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#2c7865]/70 z-50">
          <div className="bg-[#f4ebd0] p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <p className="text-gray-800 mb-4">
              La sélection est impossible car des dates sont déjà réservées sur
              la période.
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
    </div>
  );
}

export default Calendrier;
