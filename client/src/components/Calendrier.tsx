import { useEffect, useState } from "react";

import Calendar from "react-calendar";
import { useNavigate } from "react-router";
import "../App.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendrier() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [showAlert, setShowAlert] = useState(false);
  const [datesReservees, setDatesReservees] = useState<Date[]>([]);
  const [showValidation, setShowValidation] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const resa = localStorage.getItem("search");
    if (resa) {
      try {
        const parsedDates = JSON.parse(resa);
        const dates = parsedDates.map((dateStr: string) => new Date(dateStr));
        setDatesReservees(dates);
      } catch (error) {
        console.error("Erreur lors du parsing des dates réservées :", error);
      }
    }
  }, []);

  const datesDesactivees = [
    new Date(2025, 4, 5),
    new Date(2025, 4, 6),
    new Date(2025, 4, 7),
    new Date(2025, 4, 8),
    new Date(2025, 4, 10),
    new Date(2025, 4, 15),
    new Date(2025, 5, 2),
    new Date(2025, 5, 3),
    new Date(2025, 5, 4),
    new Date(2025, 5, 5),
    new Date(2025, 6, 7),
    new Date(2025, 6, 8),
    new Date(2025, 6, 9),
    new Date(2025, 6, 10),
    new Date(2025, 8, 8),
    new Date(2025, 8, 9),
    new Date(2025, 8, 10),
    new Date(2025, 8, 11),
    new Date(2025, 9, 6),
    new Date(2025, 9, 7),
    new Date(2025, 9, 8),
    new Date(2025, 9, 9),
  ];

  const isDateDesactivee = (date: Date): boolean => {
    return [...datesDesactivees, ...datesReservees].some(
      (d) => d.toDateString() === date.toDateString(),
    );
  };


  // Gestion du changement de date

  const handleChange = (value: Value) => {
    setShowAlert(false);
    setShowValidation(false);

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
    setShowValidation(true);
  };

  const handleValidation = () => {
    if (selectedDate) {
      const reservationData = {
        dates: selectedDate,
      };
      localStorage.setItem("search", JSON.stringify(reservationData));
    }

    setLoading(true);
    setTimeout(() => {
      navigate("/Order");
    }, 1500);
  };

  // Fonction pour charger les dates depuis le localStorage et mettre à jour le calendrier
  const loadDatesFromStorage = () => {
    const resa = localStorage.getItem("search");
    if (resa) {
      try {
        const parsedDates = JSON.parse(resa);
        const dates = parsedDates.map((dateStr: string) => new Date(dateStr));
        setDatesReservees(dates);
        // Appliquer les dates réservées directement au calendrier
        setSelectedDate(dates); // Met à jour la sélection du calendrier
      } catch (error) {
        console.error("Erreur lors du parsing des dates réservées :", error);
      }
    }

  };

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
