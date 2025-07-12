import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, Game } from '@/shared/types';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    fetchAllGames: builder.query<ApiResponse<Game[]>, void>({
      query: () => `/api/games`,
    }),
  }),
});

export const { useFetchAllGamesQuery } = gamesApi;
