import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Typage du contexte
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
  setShowCalendrierDepart: (value: React.SetStateAction<boolean>) => void;
  setShowCalendrierArrivee: (value: React.SetStateAction<boolean>) => void;
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

// creation du contexte

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [showCalendrierDepart, setShowCalendrierDepart] = useState(false);
  const [showCalendrierArrivee, setShowCalendrierArrivee] = useState(false);
  const [selectDateDepart, setSelectDateDepart] = useState<Date | null>(null);
  const [selectDateArrivee, setSelectDateArrivee] = useState<Date | null>(null);
  const [nombreVoyageurs, setNombreVoyageurs] = useState<number>(1);
  const [nombreEnfants, setNombreEnfants] = useState<number>(1);
  const [nombrePmr, setNombrePmr] = useState<number>(0);
  const [motif, setMotif] = useState("...");
  const [petitDejOui, setPetitDejOui] = useState(false);
  const [petitDejNon, setPetitDejNon] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [nombreLitsSimples, setNombreLitsSimples] = useState<number>(0);
  const [nombreLitsDoubles, setNombreLitsDoubles] = useState<number>(0);

  // Vérification du localStorage et initialisation des valeurs du formulaire
  useEffect(() => {
    const saved = localStorage.getItem("search");
    if (saved) {
      const data = JSON.parse(saved);
      setMotif(data.motif || "...");
      setSelectDateArrivee(data.selectDateArrivee || null);
      setSelectDateDepart(data.selectDateDepart || null);
      setNombreLitsSimples(data.nombreLitsSimples || 0);
      setNombreLitsDoubles(data.nombreLitsDoubles || 0);
      setNombreVoyageurs(data.nombreVoyageurs || 1);
      setNombreEnfants(data.nombreEnfants || 0);
      setNombrePmr(data.nombrePmr || 0);
      setPetitDejOui(data.petitDej === "oui");
      setPetitDejNon(data.petitDej === "non");
    }

    const savedDates = localStorage.getItem("dates");
    if (savedDates) {
      try {
        const arr: string[] = JSON.parse(savedDates);
        if (Array.isArray(arr) && arr.length > 0) {
          const dates = arr.map((save) => new Date(save));
          dates.sort((a, b) => a.getTime() - b.getTime());
          setSelectDateDepart(dates[0]);
          setSelectDateArrivee(dates[dates.length - 1]);
        }
      } catch (e) {
        console.error("Erreur parsing 'dates'", e);
      }
    }
  }, []);

  // Sauvegarde des dates en tableau entier
  useEffect(() => {
    if (!selectDateDepart || !selectDateArrivee) return;

    // Construire le tableau de dates
    const dates: string[] = [];
    const cur = new Date(selectDateDepart);
    cur.setHours(0, 0, 0, 0);
    const last = new Date(selectDateArrivee);
    last.setHours(0, 0, 0, 0);
    while (cur <= last) {
      dates.push(cur.toISOString());
      cur.setDate(cur.getDate() + 1);
    }
    localStorage.setItem("dates", JSON.stringify(dates));

    // Lancer le loading puis la redirection
    setLoading(true);
    const timer = setTimeout(() => {
      navigate("/Reservation");
      setLoading(false);
    }, 1500);

    // Nettoyage si les dates changent avant la fin du timeout
    return () => clearTimeout(timer);
  }, [selectDateDepart, selectDateArrivee, navigate]);

  const handleOnChangeVoyageurs = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setNombreVoyageurs(Number(event.target.value));
  };
  const handleOnChangeEnfant = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setNombreEnfants(Number(event.target.value));
  };
  const handleOnChangePmr = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNombrePmr(Number(event.target.value));
  };
  const handleOnChangeMotif = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMotif(event.target.value);
  };

  const handleOnChangePetitDejOui = () => {
    setPetitDejOui(!petitDejOui);
    setPetitDejNon(false); // décocher l'autre
  };

  const handleOnChangePetitDejNon = () => {
    setPetitDejNon(!petitDejNon);
    setPetitDejOui(false); // décocher l'autre
  };

  const handleOnChangeLitsSimples = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setNombreLitsSimples(Number(e.target.value));

  const handleOnChangeLitsDoubles = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setNombreLitsDoubles(Number(e.target.value));

  const handleSubmit = () => {
    // 1) Sauvegarder les critères de recherche
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

    // 2) Construire et sauvegarder le tableau de dates
    if (selectDateDepart && selectDateArrivee) {
      const dates: string[] = [];
      const cur = new Date(selectDateDepart);
      cur.setHours(0, 0, 0, 0);
      const last = new Date(selectDateArrivee);
      last.setHours(0, 0, 0, 0);
      while (cur <= last) {
        dates.push(cur.toISOString());
        cur.setDate(cur.getDate() + 1);
      }
      localStorage.setItem("dates", JSON.stringify(dates));
    }

    // 3) Lancer l’animation et la redirection
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
        handleOnChangeVoyageurs,
        handleOnChangePmr,
        handleOnChangeEnfant,
        handleOnChangeMotif,
        handleOnChangePetitDejNon,
        handleOnChangePetitDejOui,
        handleSubmit,
        nombreLitsSimples,
        nombreLitsDoubles,
        setNombreLitsSimples,
        setNombreLitsDoubles,
        handleOnChangeLitsSimples,
        handleOnChangeLitsDoubles,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Hook personnalisé
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
