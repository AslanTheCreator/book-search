import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import books from './books/slice';

export const store = configureStore({
  reducer: {
    filter,
    books,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
