import { useState, useEffect } from 'react';

type Theme = 'light';

export function useTheme() {
  const [theme] = useState<Theme>('light');

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    localStorage.setItem('theme', 'light');
  }, []);

  return {
    theme,
    toggleTheme: () => {},
    isDark: false
  };
} 
