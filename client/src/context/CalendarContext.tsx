import { createContext, useContext, useEffect, useState } from "react";
import type { Value } from "react-calendar/src/shared/types.js";
import { useNavigate } from "react-router";

//typage
interface CalendarContextType {
  selectedDate: Value;
  showAlert: boolean;
  datesReservees: Date[];
  showValidation: boolean;
  loading: boolean;
  setSelectedDate: React.Dispatch<Date>;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setShowValidation: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleValidation: () => void;
  handleChange: (value: Value) => void;
  loadDatesFromStorage: () => void;
  isDateDesactivee: (date: Date) => boolean;
}

//provider
const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined,
);

//states

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [showAlert, setShowAlert] = useState(false);
  const [datesReservees, setDatesReservees] = useState<Date[]>([]);
  const [showValidation, setShowValidation] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <CalendarContext.Provider
      value={{
        selectedDate,
        showAlert,
        datesReservees,
        showValidation,
        loading,
        setSelectedDate,
        setShowAlert,
        setShowValidation,
        setLoading,
        handleValidation,
        handleChange,
        loadDatesFromStorage,
        isDateDesactivee,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

//hook personalisation

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
