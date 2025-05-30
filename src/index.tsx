import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@app/App';
import { Providers } from '@app/providers/Providers';
import '@fontsource/inter/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
