'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeModeContextType {
  isPainterMode: boolean;
  toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(undefined);

function getInitialTheme(): boolean {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'painter' : true; // Default to painter mode
  }
  return true;
}

export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [isPainterMode, setIsPainterMode] = useState(getInitialTheme);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Update body classes based on current theme
    document.body.classList.remove('painter-mode', 'code-mode');
    document.body.classList.add(isPainterMode ? 'painter-mode' : 'code-mode');

    // Save preference
    localStorage.setItem('theme', isPainterMode ? 'painter' : 'coder');

    // Mark initialized so UI can render
    setIsInitialized(true);
  }, [isPainterMode]);

  const toggleTheme = () => {
    setIsPainterMode((prev) => !prev);
  };

  // Prevent flash of wrong theme by not rendering until initialized
  if (!isInitialized) {
    return null;
  }

  return (
    <ThemeModeContext.Provider value={{ isPainterMode, toggleTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (context === undefined) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
}
