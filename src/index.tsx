import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
