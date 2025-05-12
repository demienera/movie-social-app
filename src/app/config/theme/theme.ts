import { createTheme } from '@mui/material';
import { colors } from './colors';

export const theme = createTheme({
  palette: {
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.textPrimary,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          fontSynthesis: 'none',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            color: colors.accent,
          },
        },
        img: {
          maxWidth: '100%',
          display: 'block',
          height: 'auto',
        },
        'ul, ol': {
          listStyle: 'none',
        },
      },
    },
  },
});
