"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "ar" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as Lang;
    if (savedLang) {
      setLang(savedLang);
    }
    setIsMounted(true);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const newLang = prev === "en" ? "ar" : "en";
      localStorage.setItem("portfolio_lang", newLang);
      return newLang;
    });
  };

  if (!isMounted) {
    return <div className="bg-slate-950 min-h-screen w-full" />; 
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}