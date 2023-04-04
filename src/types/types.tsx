export interface IImage {
  thumbnail: string;
}

export interface Info {
  title: string;
  imageLinks: IImage;
  authors: string;
  categories: string;
}

export interface IBook {
  id: number;
  volumeInfo: Info;
}

export interface ISearch {
  searchBook: string;
  setSearchBook: (c: string) => void;
}
