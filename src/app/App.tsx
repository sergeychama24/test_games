import { ErrorBoundary } from './providers/errorProvider';
import { AppRouter } from './providers/routerProvider';
import { StoreProvider } from './providers/storeProvider';

import '../shared/styles/index.scss';

export function App() {
  return (
    <StoreProvider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </StoreProvider>
  );
}
