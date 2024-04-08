// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');

  function toggleTheme () {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  function toggleLanguage () {
    setLanguage(language === 'english' ? 'vietnamese' : 'english');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};
