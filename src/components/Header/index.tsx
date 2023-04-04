import { FC } from 'react';
import { Categories } from '../Categories';
import { SearchBook } from '../SearchBook';
import { Sort } from '../Sort';
import styles from './Header.module.css';
import { useAppDispatch } from '../../redux/hooks';
import { setSearch } from '../../redux/filter/slice';

interface IHeader {
  getBooks: () => Promise<void>;
}

export const Header: FC<IHeader> = ({ getBooks }) => {
  const dispatch = useAppDispatch();

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getBooks();
    dispatch(setSearch(''));
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Search for books</h1>
        <form onSubmit={handleSumbit} className={styles.form}>
          <SearchBook />
          <div className={styles.filterSort}>
            <Categories />
            <Sort />
          </div>
        </form>
      </div>
    </div>
  );
};
