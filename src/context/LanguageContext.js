import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [translations, setTranslations] = useState({});

  // Cargar traducciones
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await import(`../locales/${language}.json`);
        setTranslations(response.default);
        
        // Guardar preferencia
        localStorage.setItem('preferredLanguage', language);
        document.documentElement.lang = language;
      } catch (error) {
        console.error('Error loading translations:', error);
        // Cargar español como fallback
        try {
          const fallback = await import(`../locales/es.json`);
          setTranslations(fallback.default);
        } catch (e) {
          console.error('Failed to load fallback translations:', e);
        }
      }
    };

    loadTranslations();
  }, [language]);

  // Inicializar con idioma guardado o del navegador
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['es', 'en', 'fr', 'de', 'it', 'por', 'chi', 'ru'];
    
    if (savedLanguage && supportedLangs.includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else if (supportedLangs.includes(browserLang)) {
      setLanguage(browserLang);
    }
  }, []);

  const t = (path) => {
    const keys = path.split('.');
    let value = translations;
    
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) {
        console.warn(`Translation missing for: ${path}`);
        return path.split('.').pop(); // Devolver última parte como fallback
      }
    }
    
    return value;
  };

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
