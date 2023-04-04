import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IData, SearchBooksParams } from './types';
import { KEY, MAX_RESULTS, BASE_URL } from '../../constants/api';

export const fetchBooks = createAsyncThunk<IData, SearchBooksParams>(
  'books/fetchBooksStatus',
  async (params) => {
    const { search, categories, sort, startIndex } = params;
    console.log(params);
    const { data } = await axios.get<IData>(
      `${BASE_URL}?q=intitle:${search}+subject:${categories}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&${KEY}`,
    );
    return data;
  },
);
