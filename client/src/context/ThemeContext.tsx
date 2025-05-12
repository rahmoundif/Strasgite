import { createContext, useContext, useEffect, useState } from "react";
import { useLogin } from "./LoginContext";

//typage du context
type Theme = "default" | "Europe";

interface ThemeContexteType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
}

//creation du context

const ThemeContext = createContext<ThemeContexteType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("default");
  const { userRole } = useLogin();

  useEffect(() => {
    if (userRole === "Europe") {
      setTheme("Europe");
    } else {
      setTheme("default");
    }
  }, [userRole]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "default" ? "Europe" : "default"));
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

//Hook Personnalisé

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within à ThemeProvider");
  }

  return context;
};
