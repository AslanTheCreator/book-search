import { FC } from 'react';
import { BooksFound, BookList } from '../components';
import { Pagination } from '../components/Pagination';

interface IHome {
  setPag: (num: number) => void;
}

export const Home: FC<IHome> = ({ setPag }) => {
  return (
    <div className="container">
      <BooksFound />
      <BookList />
      {/* <Pagination fetchBooks={fetchBooks} setPag={setPag} /> */}
    </div>
  );
};
