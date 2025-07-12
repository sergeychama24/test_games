import { configureStore } from '@reduxjs/toolkit';
import { gamesApi } from '@/features/games/api/gamesApi';

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
