'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isPainterMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isPainterMode, setIsPainterMode] = useState(false);

  useEffect(() => {
    // Load theme preference from localStorage if available
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsPainterMode(savedTheme === 'painter');
    }
  }, []);

  const toggleTheme = () => {
    setIsPainterMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'painter' : 'coder');
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isPainterMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 