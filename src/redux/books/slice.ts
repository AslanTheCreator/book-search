import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Books, IBooksSliceState, Status } from './types';
import { fetchBooks } from './asyncActions';

const initialState: IBooksSliceState = {
  items: [],
  foundItems: 0,
  status: Status.SUCCESS, // loading | success | error
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Books[]>) {
      state.items = action.payload;
    },
    setFoundBooks(state, action: PayloadAction<number>) {
      state.foundItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
      state.foundItems = 0;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload.items;
      state.foundItems = action.payload.totalItems;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
      state.foundItems = 0;
    });
  },
});

export const { setItems, setFoundBooks } = booksSlice.actions;

export default booksSlice.reducer;
