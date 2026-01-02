import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageSelector.css';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

const languages = [
    { value: 'es', label: 'Español' },
    { value: 'eus', label: 'Euskera' },
    { value: 'en', label: 'Inglés' },
    { value: 'fr', label: 'Francés' },
    { value: 'de', label: 'Alemán' },
    { value: 'pt', label: 'Portugués' },
    { value: 'zh-CN', label: 'Chino simplificado' },
    { value: 'zh-TW', label: 'Chino tradicional' },
    { value: 'it', label: 'Italiano' },
    { value: 'cat', label: 'Catalán' },
    { value: 'gal', label: 'Gallego' },
    { value: 'ja', label: 'Japonés' }, // <-- coma añadida
    { value: 'no', label: 'Noruego' },
    { value: 'ru', label: 'Ruso' },
    { value: 'ar', label: 'Árabe' },
];

  return (
    <div className="language-selector">
      <select 
        id="language-selector"
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-select"
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
