import { createTheme } from '@mui/material/styles';
import { darkPalette, lightPalette } from './palette';
import { baseTypography } from './typography';
import { darkCustom, lightCustom } from './customTokens';
import type { ThemeOptions } from '@mui/material/styles/createThemeNoVars';

export const darkTheme = createTheme({
  palette: darkPalette,
  typography: baseTypography,
  custom: darkCustom,
} as ThemeOptions);

export const lightTheme = createTheme({
  palette: lightPalette,
  typography: baseTypography,
  custom: lightCustom,
} as ThemeOptions);
