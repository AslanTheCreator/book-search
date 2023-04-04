export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchBooksParams = {
  search: string;
  categories: string;
  sort: string;
  startIndex: number;
};

export type Books = {
  id: number;
  volumeInfo: Info;
};

export type Info = {
  title: string;
  imageLinks: Image;
  authors: string;
  categories: string;
};

export type Image = {
  thumbnail: string;
};

export interface IBooksSliceState {
  items: Books[];
  foundItems: number;
  status: Status;
}

export interface IData {
  items: Books[];
  totalItems: number;
}
