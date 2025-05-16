import { createContext, useContext, useState } from "react";

// Déclaration du type exact des rôles
type Role = "User" | "Admin" | "Europe" | "";

// Typage du contexte
interface LoginContextType {
  isPemid: boolean;
  info: boolean;
  isConnected: boolean;
  code: string;
  mail: string;
  pemid: string;
  message: string;
  userRole: Role;
  setIsPemid: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setMail: React.Dispatch<React.SetStateAction<string>>;
  setPemid: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setUserRole: React.Dispatch<React.SetStateAction<Role>>;
  handleLogin: () => void;
  handleLogout: () => void;
  togglePEMID: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnInfo: () => void;
}

// Création du contexte
const LoginContext = createContext<LoginContextType | undefined>(undefined);

// Provider
export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPemid, setIsPemid] = useState(false);
  const [info, setIsInfo] = useState(false);

  const [isConnected, setIsConnected] = useState(() => {
    const visitor = localStorage.getItem("ConnexionVisiteur") === "true";
    const admin = localStorage.getItem("ConnexionAdmin") === "true";
    const europe = localStorage.getItem("ConnexionEurope") === "true";
    return visitor || admin || europe;
  });

  const [userRole, setUserRole] = useState<Role>(() => {
    const role =
      localStorage.getItem("ConnexionAdmin") === "true"
        ? "Admin"
        : localStorage.getItem("ConnexionVisiteur") === "true"
          ? "User"
          : localStorage.getItem("ConnexionEurope") === "true"
            ? "Europe"
            : "";
    return role;
  });

  const [code, setCode] = useState("");
  const [mail, setMail] = useState(() => localStorage.getItem("Mail") || "");
  const [pemid, setPemid] = useState("");
  const [message, setMessage] = useState("");

  const togglePEMID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPemid(e.target.value === "Oui");
  };

  const handleOnInfo = () => {
    setIsInfo((prev) => !prev);
  };

  const handleLogin = () => {
    if (code === "User" && mail === "kate.thalwyn@gmail.com") {
      setIsConnected(true);
      setMessage("Vous êtes connecté");
      setUserRole("User");
      setMail(mail);
      localStorage.setItem("ConnexionVisiteur", "true");
      localStorage.setItem("Mail", mail);
    }

    if (code === "Admin" && mail === "dave.lopp@gmail.com") {
      setIsConnected(true);
      setMessage("Vous êtes connecté");
      setUserRole("Admin");
      setMail(mail);
      localStorage.setItem("ConnexionAdmin", "true");
      localStorage.setItem("Mail", mail);
    }

    if (
      code === "Europe" &&
      mail === "paul.source@gmail.com" &&
      pemid === "PEFRPAU486"
    ) {
      setIsConnected(true);
      setMessage("Vous êtes connecté");
      setUserRole("Europe");
      setMail(mail);
      localStorage.setItem("ConnexionEurope", "true");
      localStorage.setItem("Mail", mail);
    }

    if (
      !(
        (code === "User" && mail === "kate.thalwyn@gmail.com") ||
        (code === "Admin" && mail === "dave.lopp@gmail.com") ||
        (code === "Europe" &&
          mail === "paul.source@gmail.com" &&
          pemid === "PEFRPAU486")
      )
    ) {
      setMessage("Code incorrect");
    }
  };

  const handleLogout = () => {
    setIsConnected(false);
    setUserRole("");
    setMessage("");
    setMail("");
    localStorage.removeItem("ConnexionAdmin");
    localStorage.removeItem("ConnexionVisiteur");
    localStorage.removeItem("ConnexionEurope");
    localStorage.removeItem("Mail");
    localStorage.removeItem("language");
    localStorage.removeItem("resavalide");
  };

  return (
    <LoginContext.Provider
      value={{
        isPemid,
        info,
        isConnected,
        code,
        mail,
        pemid,
        message,
        userRole,
        setIsPemid,
        setIsInfo,
        setIsConnected,
        setCode,
        setMail,
        setPemid,
        setMessage,
        setUserRole,
        handleLogin,
        handleLogout,
        togglePEMID,
        handleOnInfo,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

// Hook personnalisé
export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
