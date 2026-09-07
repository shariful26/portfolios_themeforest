import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolio.config';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const defaultTheme = portfolioConfig.demoSettings.defaultTheme || 'dark';
  const defaultAccent = portfolioConfig.demoSettings.defaultAccent || 'violet';
  const defaultPreset = portfolioConfig.demoSettings.defaultPreset || 'developer';

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('nexus_theme') || defaultTheme;
  });

  const [accent, setAccent] = useState(() => {
    // If config specifies defaultAccent, prioritize config defaultAccent on initial load
    const storedAccent = localStorage.getItem('nexus_accent');
    if (storedAccent && ['emerald', 'violet', 'cyan', 'amber', 'rose'].includes(storedAccent)) {
      return storedAccent;
    }
    return defaultAccent;
  });

  const [activePreset, setActivePreset] = useState(() => {
    return localStorage.getItem('nexus_preset') || defaultPreset;
  });

  // Sync state if config defaultAccent changes
  useEffect(() => {
    if (portfolioConfig.demoSettings.defaultAccent) {
      setAccent(portfolioConfig.demoSettings.defaultAccent);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    // Apply Dark / Light Theme Class
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemDark) root.classList.add('dark');
      else root.classList.remove('dark');
    }

    localStorage.setItem('nexus_theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-accent', accent);
    localStorage.setItem('nexus_accent', accent);
  }, [accent]);

  useEffect(() => {
    localStorage.setItem('nexus_preset', activePreset);
  }, [activePreset]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      toggleTheme,
      accent,
      setAccent,
      activePreset,
      setActivePreset
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
