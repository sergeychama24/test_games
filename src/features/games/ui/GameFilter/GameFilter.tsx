import type { ChangeEvent } from 'react';
import cls from './GameFilter.module.scss';
import clsx from 'clsx';

interface GameFilterProps {
  className?: string;
  onFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string;
    name: string;
  }[];
}

export function GameFilter({ options, onFilter, className }: GameFilterProps) {
  return (
    <div className={clsx(cls.gameFilter, className)}>
      <span>Game Type</span>
      <select
        className={cls.select}
        name=""
        id=""
        defaultValue={'all'}
        onChange={onFilter}
      >
        {options.map((option) => (
          <option
            className={cls.option}
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
