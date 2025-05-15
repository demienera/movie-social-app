import { Provider } from 'react-redux';
import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import { ThemeProviderWrapper } from './ThemeProvidersWrapper';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </BrowserRouter>
    </Provider>
  );
};
