import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../config/theme/theme';
import type { ReactNode } from 'react';
import { useThemeMode } from '@/shared/hooks/useThemeMode';

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const { mode } = useThemeMode();
  const theme = mode === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
