import { Provider } from 'react-redux';
import type { ReactNode } from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import store from '../store/store';
import { ThemeProviderWrapper } from './ThemeProvidersWrapper';

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
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </Router>
    </Provider>
  );
};
