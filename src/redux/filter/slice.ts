import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from './types';

const initialState: FilterState = {
  categories: '',
  sort: 'relevance',
  search: '',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<string>) {
      state.categories = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setCategories, setSort, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
