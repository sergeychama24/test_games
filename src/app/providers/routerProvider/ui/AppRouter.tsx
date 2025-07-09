import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/shared/ui/MainLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { Suspense } from 'react';
import { PageLoader } from '@/shared/ui/PageLoader';
import { HomePage } from '@/pages/HomePage';

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
            element={
              <Suspense fallback={<PageLoader />}>
                <HomePage />
              </Suspense>
            }
          />
        </Route>
        <Route
          path={'/*'}
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
