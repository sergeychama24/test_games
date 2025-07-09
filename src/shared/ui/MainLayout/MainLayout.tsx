import { Outlet } from 'react-router-dom';
import cls from './MainLayout.module.scss';

export function MainLayout() {
  return (
    <main className={cls.main}>
      <Outlet />
    </main>
  );
}
