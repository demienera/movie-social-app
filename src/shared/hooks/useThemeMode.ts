import { useEffect, useMemo } from 'react';
import { darkTheme, lightTheme } from '@/app/config/theme/theme';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import { setTheme, toggleTheme } from '@/features/theme/model/themeSlice';
import { useMediaQuery } from '@mui/material';
import type { Theme } from '@mui/material/styles';

type UseThemeModeProps = {
  mode: 'light' | 'dark';
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
};

export const useThemeMode = (): UseThemeModeProps => {
  const mode = useAppSelector(state => state.theme.mode);
  const dispatch = useAppDispatch();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      dispatch(setTheme(prefersDarkMode ? 'dark' : 'light'));
    }
  }, [dispatch, prefersDarkMode]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      dispatch(setTheme(e.matches ? 'dark' : 'light'));
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [dispatch]);

  return {
    mode,
    theme,
    toggleTheme: () => dispatch(toggleTheme()),
    isDarkMode: mode === 'dark',
  };
};
