import { SnackbarProvider } from 'notistack';
import type { ReactNode } from 'react';

export const CustomSnackbarProvider = ({ children }: { children: ReactNode }) => (
  <SnackbarProvider
    maxSnack={3}
    autoHideDuration={4000}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
  >
    {children}
  </SnackbarProvider>
);
