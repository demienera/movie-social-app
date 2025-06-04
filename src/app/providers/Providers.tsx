import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ThemeProviderWrapper } from './ThemeProvidersWrapper';
import { CustomSnackbarProvider } from './CustomSnackbarProvider';
import store from '../store/store';

type ProvidersProps = {
  children: ReactNode;
  initialEntries?: string[];
};

export const Providers = ({ children, initialEntries }: ProvidersProps) => {
  const Router = initialEntries ? MemoryRouter : BrowserRouter;
  const routerProps = initialEntries ? { initialEntries } : {};
  return (
    <Provider store={store}>
      <Router {...routerProps}>
        <ThemeProviderWrapper>
          <CustomSnackbarProvider>{children}</CustomSnackbarProvider>
        </ThemeProviderWrapper>
      </Router>
    </Provider>
  );
};
