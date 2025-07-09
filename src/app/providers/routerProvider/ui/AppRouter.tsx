import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/shared/ui/MainLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function AppRouter() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route
          path={'/'}
          element={<MainLayout />}
        >
          <Route
            index
            element={<h1>Home Page</h1>}
          />
        </Route>
        <Route
          path={'/*'}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
