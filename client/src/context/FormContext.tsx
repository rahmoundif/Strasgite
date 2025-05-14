import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormContextType {
  showCalendrierDepart: boolean;
  showCalendrierArrivee: boolean;
  selectDateDepart: Date | null;
  selectDateArrivee: Date | null;
  nombreVoyageurs: number;
  nombreEnfants: number;
  nombrePmr: number;
  motif: string;
  petitDejOui: boolean;
  petitDejNon: boolean;
  loading: boolean;
  nombreLitsSimples: number;
  nombreLitsDoubles: number;
  setShowCalendrierDepart: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCalendrierArrivee: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectDateDepart: React.Dispatch<React.SetStateAction<Date | null>>;
  setSelectDateArrivee: React.Dispatch<React.SetStateAction<Date | null>>;
  setNombreVoyageurs: React.Dispatch<React.SetStateAction<number>>;
  setNombreEnfants: React.Dispatch<React.SetStateAction<number>>;
  setNombrePmr: React.Dispatch<React.SetStateAction<number>>;
  setMotif: React.Dispatch<React.SetStateAction<string>>;
  setPetitDejOui: React.Dispatch<React.SetStateAction<boolean>>;
  setPetitDejNon: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setNombreLitsSimples: React.Dispatch<React.SetStateAction<number>>;
  setNombreLitsDoubles: React.Dispatch<React.SetStateAction<number>>;
  handleOnChangeVoyageurs: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangePmr: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeEnfant: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeMotif: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeLitsSimples: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeLitsDoubles: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangePetitDejNon: () => void;
  handleOnChangePetitDejOui: () => void;
  handleSubmit: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [showCalendrierDepart, setShowCalendrierDepart] = useState(false);
  const [showCalendrierArrivee, setShowCalendrierArrivee] = useState(false);
  const [selectDateDepart, setSelectDateDepart] = useState<Date | null>(null);
  const [selectDateArrivee, setSelectDateArrivee] = useState<Date | null>(null);
  const [nombreVoyageurs, setNombreVoyageurs] = useState<number>(1);
  const [nombreEnfants, setNombreEnfants] = useState<number>(0);
  const [nombrePmr, setNombrePmr] = useState<number>(0);
  const [motif, setMotif] = useState<string>("...");
  const [petitDejOui, setPetitDejOui] = useState<boolean>(false);
  const [petitDejNon, setPetitDejNon] = useState<boolean>(false);
  const [nombreLitsSimples, setNombreLitsSimples] = useState<number>(0);
  const [nombreLitsDoubles, setNombreLitsDoubles] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const rawDates = localStorage.getItem("reservationDates");
    if (rawDates) {
      const saved = JSON.parse(rawDates) as string[];
      const dates = saved.map((s: string) => new Date(s));
      if (dates?.length > 0) {
        setSelectDateDepart(dates[0]);
        setSelectDateArrivee(dates[dates.length - 1]);
      }
    }

    const rawSearch = localStorage.getItem("search");
    if (rawSearch) {
      const data = JSON.parse(rawSearch);
      setMotif(data.motif || "...");
      setNombreLitsSimples(data.nombreLitsSimples || 0);
      setNombreLitsDoubles(data.nombreLitsDoubles || 0);
      setNombreVoyageurs(data.nombreVoyageurs || 1);
      setNombreEnfants(data.nombreEnfants || 0);
      setNombrePmr(data.nombrePmr || 0);
      setPetitDejOui(data.petitDej === "oui");
      setPetitDejNon(data.petitDej === "non");
    }
  }, []);

  // ✅ Format YYYY-MM-DD sans UTC
  const generateDateRange = (a: Date, b: Date): string[] => {
    const [start, end] =
      a < b ? [new Date(a), new Date(b)] : [new Date(b), new Date(a)];

    const dates: string[] = [];
    const cur = new Date(start);
    while (cur <= end) {
      const yyyy = cur.getFullYear();
      const mm = String(cur.getMonth() + 1).padStart(2, "0");
      const dd = String(cur.getDate()).padStart(2, "0");
      dates.push(`${yyyy}-${mm}-${dd}`);
      cur.setDate(cur.getDate() + 1);
    }

    return dates;
  };

  const handleOnChangeVoyageurs = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setNombreVoyageurs(Number(e.target.value));
  const handleOnChangeEnfant = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setNombreEnfants(Number(e.target.value));
  const handleOnChangePmr = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setNombrePmr(Number(e.target.value));
  const handleOnChangeMotif = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMotif(e.target.value);
  const handleOnChangeLitsSimples = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setNombreLitsSimples(Number(e.target.value));
  const handleOnChangeLitsDoubles = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setNombreLitsDoubles(Number(e.target.value));
  const handleOnChangePetitDejOui = () => {
    setPetitDejOui((prev) => !prev);
    setPetitDejNon(false);
  };
  const handleOnChangePetitDejNon = () => {
    setPetitDejNon((prev) => !prev);
    setPetitDejOui(false);
  };

  const handleSubmit = () => {
    if (selectDateDepart && selectDateArrivee) {
      const dates = generateDateRange(selectDateDepart, selectDateArrivee);
      localStorage.setItem("reservationDates", JSON.stringify(dates));
    }

    const search = {
      motif,
      nombreLitsDoubles,
      nombreLitsSimples,
      nombreVoyageurs,
      nombreEnfants,
      nombrePmr,
      petitDej: petitDejOui ? "oui" : petitDejNon ? "non" : "",
    };
    localStorage.setItem("search", JSON.stringify(search));

    setLoading(true);
    setTimeout(() => {
      navigate("/Reservation");
      setLoading(false);
    }, 1500);
  };

  return (
    <FormContext.Provider
      value={{
        showCalendrierDepart,
        showCalendrierArrivee,
        selectDateDepart,
        selectDateArrivee,
        nombreVoyageurs,
        nombreEnfants,
        nombrePmr,
        motif,
        petitDejOui,
        petitDejNon,
        loading,
        nombreLitsSimples,
        nombreLitsDoubles,
        setShowCalendrierDepart,
        setShowCalendrierArrivee,
        setSelectDateDepart,
        setSelectDateArrivee,
        setNombreVoyageurs,
        setNombreEnfants,
        setNombrePmr,
        setMotif,
        setPetitDejOui,
        setPetitDejNon,
        setLoading,
        setNombreLitsSimples,
        setNombreLitsDoubles,
        handleOnChangeVoyageurs,
        handleOnChangePmr,
        handleOnChangeEnfant,
        handleOnChangeMotif,
        handleOnChangeLitsSimples,
        handleOnChangeLitsDoubles,
        handleOnChangePetitDejOui,
        handleOnChangePetitDejNon,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useForm must be used within a FormProvider");
  return context;
};
