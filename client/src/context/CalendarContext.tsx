import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Value } from "react-calendar/src/shared/types.js";
import { useNavigate } from "react-router";
import { useLogin } from "../context/LoginContext";
//import { useForm } from "../context/FormContext";

//const {selectDateDepart, selectDateArrivee} = useForm()

// Typage
interface CalendarContextType {
  selectedDate: Value;
  showAlert: boolean;
  datesReservees: Date[];
  showValidation: boolean;
  loading: boolean;
  setSelectedDate: React.Dispatch<React.SetStateAction<Value>>;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setShowValidation: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleValidation: () => void;
  handleChange: (value: Value) => void;
  loadDatesFromStorage: () => void;
  isDateDesactivee: (date: Date) => boolean;
}

const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined,
);

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

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedDate, setSelectedDate] = useState<Value>([
    new Date(),
    new Date(),
  ]);
  const [showAlert, setShowAlert] = useState(false);
  const [datesReservees, setDatesReservees] = useState<Date[]>([]);
  const [showValidation, setShowValidation] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userRole, isConnected } = useLogin();

  const isDateDesactivee = useCallback(
    (date: Date) => {
      if (
        userRole === "User" ||
        userRole === "Admin" ||
        isConnected === false
      ) {
        return [...datesDesactivees, ...datesReservees].some(
          (d) => d.toDateString() === date.toDateString(),
        );
      }
      return false;
    },

    [userRole, isConnected, datesReservees],
  );

  const loadDatesFromStorage = useCallback(() => {
    const resa = localStorage.getItem("reservationDates");
    if (resa) {
      try {
        const parsedDates: string[] = JSON.parse(resa);
        const dates = parsedDates.map((dateStr) => new Date(dateStr));

        if (dates.length > 1) {
          const start = dates[0];
          const end = dates[dates.length - 1];
          const current = new Date(start);

          while (current <= end) {
            if (isDateDesactivee(current)) {
              setSelectedDate(null);
              setShowAlert(true);
              return;
            }
            current.setDate(current.getDate() + 1);
          }

          setSelectedDate([start, end]);
          setShowValidation(true);
        }
        setDatesReservees(dates);
      } catch (error) {
        console.error("Erreur lors du parsing des dates réservées :", error);
      }
    }
  }, [isDateDesactivee]);

  useEffect(() => {
    loadDatesFromStorage();
  }, [loadDatesFromStorage]);

  const handleChange = (value: Value) => {
    setShowAlert(false);
    setShowValidation(false);

    if (Array.isArray(value)) {
      const [start, end] = value;
      if (start && end) {
        const current = new Date(start);
        while (current <= end) {
          if (isDateDesactivee(current)) {
            setSelectedDate(null);
            setShowAlert(true);
            return;
          }
          current.setDate(current.getDate() + 1);
        }
        setSelectedDate(value);
        setShowValidation(true);
      }
    } else {
      if (value instanceof Date && isDateDesactivee(value)) {
        setSelectedDate(null);
        setShowAlert(true);
        return;
      }
      setSelectedDate(value);
      setShowValidation(true);
    }
  };

  /* const generateDateRange = (a: Date, b: Date): string[] => {
    const [start, end] =
      a < b ? [new Date(a), new Date(b)] : [new Date(b), new Date(a)];

    const dates: string[] = [];
    const cur = new Date(start);
    while (cur <= end) {
      dates.push(cur.toISOString().split("T")[0]);
      cur.setDate(cur.getDate() + 1);
    }
    return dates;
  };*/

  const handleValidation = () => {
    if (selectedDate) {
      const reservationData = {
        dates: selectedDate,
      };
      localStorage.setItem("reservationDates", JSON.stringify(reservationData));
    }
    /*if (selectDateDepart && selectDateArrivee) {
      const dates = generateDateRange(selectDateDepart, selectDateArrivee);
      localStorage.setItem("reservationDates", JSON.stringify(dates));
    }*/

    setLoading(true);
    setTimeout(() => {
      navigate("/Order");
    }, 1500);
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

// Hook personnalisé
export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};
