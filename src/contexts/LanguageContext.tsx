import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../locales/en.json';
import ar from '../locales/ar.json';

type Language = 'en' | 'ar';

const translations = { en, ar };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
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

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
