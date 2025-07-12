import { useEffect } from 'react';

export function useInfiniteScroll(onBottom: () => void) {
  useEffect(() => {
    console.log('infinite work');

    const handler = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        onBottom();
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [onBottom]);
}
