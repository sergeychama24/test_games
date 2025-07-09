import { createSlice } from '@reduxjs/toolkit';

const initialState: { id: string; name: string } = {
  id: 'as12',
  name: 'Monkey Business',
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
});

export const { reducer: gamesReducer } = gamesSlice;
