import { Link } from 'react-router-dom';
import cls from './NotFoundPage.module.scss';

export function NotFoundPage() {
  return (
    <main className={cls.main}>
      <h1>😔 Sorry, the page you’re looking for can’t be found.</h1>
      <Link to="/">Return to home page</Link>
    </main>
  );
}
