import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';

export const THEMES = {
  dark: 'dark',
  light: 'light',
};
export default () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.dark : THEMES.light,
  );

  useEffect(() => {
    if (currentTheme == THEMES.dark) {
      console.log('I got called dark');

      document.body.classList.add('dark');
    } else {
      console.log('I got called light');

      document.body.classList.remove('dark');
    }
  }, [currentTheme]);

  const setDarkMode = () => {
    setCurrentTheme(THEMES.dark);
  };
  const setLightMode = () => {
    console.log('Changing to light mode');
    setCurrentTheme(THEMES.light);
  };

  const toggleTheme = () => {
    setCurrentTheme((theme) => (theme == THEMES.dark ? THEMES.light : THEMES.dark));
  };

  return {
    currentTheme,
    setDarkMode,
    setLightMode,
    toggleTheme,
  };
};
