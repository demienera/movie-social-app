import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import { theme } from '../config/theme/theme';
import type { ProvidersProps } from './types';

export const Providers = ({ children }: ProvidersProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  </Provider>
);
