import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { App } from '@/app/App';

const root = createRoot(document.querySelector('#root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
