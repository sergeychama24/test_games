import { useCallback, useState } from 'react';

export function useVisibleCount(total: number, initial = 32, step = 16) {
  const [count, setCount] = useState(initial);

  const resetCount = useCallback(() => {
    setCount(initial);
  }, [initial]);

  const loadMore = useCallback(() => {
    setCount((prev) => Math.min(prev + step, total));
  }, [step, total]);

  return { count, loadMore, resetCount };
}
