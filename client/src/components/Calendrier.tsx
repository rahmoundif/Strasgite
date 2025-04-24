import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../App.css";

// Types pour la gestion d'une date ou d'une plage de dates
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendrier() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [showAlert, setShowAlert] = useState(false);
  const [datesReservees, setDatesReservees] = useState<Date[]>([]);
  const [showValidation, setShowValidation] = useState(false);

  // Lecture du localStorage pour récupérer les dates réservées
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

  // Dates désactivées prédéfinies
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

  // Fonction pour vérifier si une date est désactivée
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

  // Mise a jour ou replissage du local storage a vaildation de la réservation
  const handleValidation = () => {
    if (selectedDate) {
      const reservationData = {
        dates: selectedDate,
        // Ajoutez ici d'autres informations pertinentes
      };
      localStorage.setItem("search", JSON.stringify(reservationData));
      alert("Réservation enregistrée avec succès !");
      setShowValidation(false);
    }
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
            onClick={() => {
              handleValidation();
            }}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Valider la réservation
          </button>
        </div>
      )}
    </div>
  );
}

export default Calendrier;
