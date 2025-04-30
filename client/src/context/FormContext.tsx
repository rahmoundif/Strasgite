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
  handleOnChangeVoyageurs: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangePmr: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeEnfant: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeMotif: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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

  // Vérification du localStorage et initialisation des valeurs du formulaire
  useEffect(() => {
    const saved = localStorage.getItem("search");
    if (saved) {
      const data = JSON.parse(saved);
      setMotif(data.motif || "...");
      setSelectDateDepart(data.datedepart ? new Date(data.datedepart) : null);
      setSelectDateArrivee(
        data.datearrivee ? new Date(data.datearrivee) : null,
      );
      setNombreVoyageurs(data.nombreVoyageurs || 1);
      setNombreEnfants(data.nombreEnfants || 1);
      setNombrePmr(data.nombrePmr || 0);
      setPetitDejOui(data.petitDej === "oui");
      setPetitDejNon(data.petitDej === "non");
    }
  }, []);

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
  const handleSubmit = () => {
    const search = {
      motif: motif,
      datedepart: selectDateDepart,
      datearrivee: selectDateArrivee,
      nombreVoyageurs: nombreVoyageurs,
      nombreEnfants: nombreEnfants,
      nombrePmr: nombrePmr,
      petitDej: petitDejOui ? "oui" : petitDejNon ? "non" : "",
    };

    localStorage.setItem("search", JSON.stringify(search));

    setLoading(true); // Démarrer l'animation de chargement

    setTimeout(() => {
      // Après 1,5 seconde, rediriger vers la page Reservation
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
