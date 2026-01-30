import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Theme } from './themes';
import { themes, getTheme } from './themes';

interface ThemeContextType {
  theme: Theme;
  setThemeById: (id: number) => void;
  allThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes[0]);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedThemeId = localStorage.getItem('portfolio-theme-id');
    if (savedThemeId) {
      setTheme(getTheme(parseInt(savedThemeId, 10)));
    }
  }, []);

  const setThemeById = (id: number) => {
    const newTheme = getTheme(id);
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme-id', id.toString());
    
    // Update CSS custom property for background gradient
    document.documentElement.style.setProperty('--theme-bg-gradient', newTheme.bgGradient);
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeById, allThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
