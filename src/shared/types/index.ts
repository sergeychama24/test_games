export type GameTypeId = 'lg' | 'vs';

export interface Game {
  gameID: string;
  gameName: string;
  gameTypeID: GameTypeId;
  technology: string;
  platform: string;
}

export type GameFilterT = GameTypeId | 'all';

export interface ApiResponse<T> {
  result: T;
  status: 0 | 1;
  error_message: string | null;
}
