import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const defaultTheme: ThemeContextType = {
  isDark: true,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const currentTheme = document.documentElement.getAttribute('data-theme') || 
                        localStorage.getItem('theme') || 
                        'dark';
    const isDarkMode = currentTheme === 'dark';
    setIsDark(isDarkMode);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const themeValue = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', themeValue);
    document.documentElement.setAttribute('data-theme', themeValue);
  }, [isDark, isMounted]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
