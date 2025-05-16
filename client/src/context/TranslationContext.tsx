import { createContext, useContext, useState } from "react";
import english from "../translations/english.json";
import french from "../translations/french.json";
import german from "../translations/german.json";

interface TranslationContextType {
  language: string;
  setLanguage: (language: string) => void;
  text_translation: (key: string) => string;
  changeLanguage: (lang: string) => void;
}

// Create the context
const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined,
);

// Translation data (example)
const translations: Record<string, Record<string, string>> = {
  english,
  french,
  german,
};

// Create the provider
export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "french";
  });

  //Local Storage
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };
  // Translation function
  const text_translation = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <TranslationContext.Provider
      value={{
        language,
        setLanguage,
        text_translation,
        changeLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook to use the I18nContext
export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("Translation must be used within an TranslationProvider");
  }
  return context;
};
