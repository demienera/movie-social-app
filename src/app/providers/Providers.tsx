import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import { theme } from '../config/theme';
import type { ProvidersProps } from './types';

export const Providers = ({ children }: ProvidersProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  </Provider>
);
