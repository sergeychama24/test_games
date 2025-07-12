import { Game } from '@/shared/types';
import { GameCard } from '@/features/games';

import cls from './GamesList.module.scss';
import clsx from 'clsx';

interface GamesListProps {
  data: Game[];
  className?: string;
}

export function GamesList({ data, className }: GamesListProps) {
  return (
    <ul className={clsx(cls.gamesList, className)}>
      {data.map((game) => (
        <GameCard
          key={game.gameID}
          gameData={game}
        />
      ))}
    </ul>
  );
}
