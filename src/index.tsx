import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import '@/styles/index.scss';

const root = createRoot(document.querySelector('#root')!);
root.render(
  <StrictMode>
    <h1>Hello</h1>
  </StrictMode>,
);
