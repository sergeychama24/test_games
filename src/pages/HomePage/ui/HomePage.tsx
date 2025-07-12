import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useFetchAllGamesQuery } from '@/features/games/api/gamesApi';
import { useInfiniteScroll } from '@/shared/lib/useInfiniteScroll';
import { useVisibleCount } from '@/features/games/hooks/useVisibleCount';
import { GameFilter, GameSearch, GamesList } from '@/features/games';
import type { Game, GameFilterT } from '@/shared/types';
import { PageLoader } from '@/shared/ui/PageLoader';
import { ReactComponent as BrandLogo } from '@/shared/assets/icons/brand-logo.svg';
import { gameFilterConfig } from '@/shared/config/gameFilterConfig';

import cls from './HomePage.module.scss';

function HomePage() {
  const { data, isFetching, isError, isSuccess } = useFetchAllGamesQuery();

  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<GameFilterT>('all');

  const filteredGames = useMemo<Game[]>(() => {
    const games = data?.result ?? [];

    const normSearch = search.trim().toLowerCase();
    return games.filter((g) => {
      const matchesName = g.gameName.toLowerCase().includes(normSearch);
      const matchesType = typeFilter === 'all' || g.gameTypeID === typeFilter;
      return matchesName && matchesType;
    });
  }, [data, search, typeFilter]);

  const { count, loadMore, resetCount } = useVisibleCount(filteredGames.length);
  useInfiniteScroll(loadMore);

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      resetCount();
    },
    [resetCount],
  );

  const handleFilterChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setTypeFilter(e.target.value as GameFilterT);
      resetCount();
    },
    [resetCount],
  );

  if (isError) throw new Error('Failed to load games');

  return (
    <>
      <div className={cls.header}>
        <GameFilter
          className={cls.filter}
          onFilter={handleFilterChange}
          options={gameFilterConfig}
        />
        <GameSearch
          className={cls.search}
          value={search}
          onSearch={handleSearch}
        />
      </div>
      <div>
        <div className={cls.heading}>
          <BrandLogo />
          <h1>Pragmatic Play</h1>
        </div>
        <div>
          {isFetching && (
            <div className={cls.loaderContainer}>
              <PageLoader className={cls.loaderSize} />
            </div>
          )}
          {isSuccess && !filteredGames.length && <h1>Nothing found:(</h1>}
          {isSuccess && <GamesList data={filteredGames.slice(0, count)} />}
        </div>
      </div>
    </>
  );
}

export default HomePage;
