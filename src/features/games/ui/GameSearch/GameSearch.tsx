import type { ChangeEvent } from 'react';
import { ReactComponent as SearchLogo } from '@/shared/assets/icons/search-logo.svg';
import cls from './GameSearch.module.scss';
import clsx from 'clsx';

interface GameSearchProps {
  className?: string;
  value: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function GameSearch({ value, onSearch, className }: GameSearchProps) {
  return (
    <div className={clsx(cls.gameSearch, className)}>
      <span className={cls.heading}>Search</span>
      <div className={cls.inputContainer}>
        <div className={cls.searchContainer}>
          <SearchLogo />
          <input
            value={value}
            type="text"
            placeholder="Search"
            onChange={onSearch}
          />
        </div>
        <button className={cls.button}>Search</button>
      </div>
    </div>
  );
}
