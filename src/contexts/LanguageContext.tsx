import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../locales/en.json';
import ar from '../locales/ar.json';

type Language = 'en' | 'ar';

// Define a type for all translation keys
type TranslationKeys = keyof typeof en;

// Create a type that ensures all translations have the same keys
type Translations = {
  [K in Language]: {
    [Key in TranslationKeys]: string;
  }
};

// Define translations with proper typing
const translations: Translations = {
  en,
  ar: ar as typeof en // Type assertion here ensures ar has same structure as en
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('en');
  
  // Initialize language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem('app-language') as Language;
    if (storedLang === 'en' || storedLang === 'ar') {
      setLanguageState(storedLang);
    }
  }, []);
  
  const setLanguage = (lang: Language) => {
    localStorage.setItem('app-language', lang);
    setLanguageState(lang);
  };
  
  const t = (key: TranslationKeys): string => translations[language][key] || key;
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};