import clsx from 'clsx';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export function PageLoader({ className }: PageLoaderProps) {
  return <span className={clsx(cls.loader, className)}></span>;
}
