import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('blue');
  const [colorScheme, setColorScheme] = useState('dark');

  // Theme color mapping for Mantine primary colors
  const themeMapping = {
    red: 'red',
    orange: 'orange',
    yellow: 'yellow',
    green: 'green',
    blue: 'blue',
    indigo: 'indigo',
    violet: 'violet'
  };

  // Color values for the navbar display - dynamic based on color scheme
  const getThemeColors = () => {
    const shade = colorScheme === 'dark' ? '8' : '7';
    return {
      red: `var(--mantine-color-red-${shade})`,
      orange: `var(--mantine-color-orange-${shade})`,
      yellow: `var(--mantine-color-yellow-${shade})`,
      green: `var(--mantine-color-green-${shade})`,
      blue: `var(--mantine-color-blue-${shade})`,
      violet: `var(--mantine-color-violet-${shade})`
    };
  };

  const themeColors = getThemeColors();

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleColorSchemeChange = () => {
    const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newScheme);
    localStorage.setItem('colorScheme', newScheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedColorScheme = localStorage.getItem('colorScheme');
    
    if (savedTheme && Object.keys(themeColors).includes(savedTheme)) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    if (savedColorScheme && ['dark', 'light'].includes(savedColorScheme)) {
      setColorScheme(savedColorScheme);
    }
  }, []);

  const value = {
    currentTheme,
    colorScheme,
    themeColors,
    themeMapping,
    handleThemeChange,
    handleColorSchemeChange,
    getMantinePrimaryColor: () => themeMapping[currentTheme] || 'blue'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
