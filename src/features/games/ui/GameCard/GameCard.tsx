import { Game } from '@/shared/types';
import cls from './GameCard.module.scss';
import clsx from 'clsx';

interface GameCardProps {
  gameData: Game;
  className?: string;
}

export function GameCard({ className, gameData }: GameCardProps) {
  const { gameID, gameName } = gameData;

  return (
    <div
      key={gameID}
      className={clsx(cls.gameCard, className)}
    >
      <div className={cls.gameCardImageWrapper}>
        <img
          src={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${gameID}.png`}
          alt=""
        />
      </div>
      <p className={cls.gameCardName}>{gameName}</p>
    </div>
  );
}
