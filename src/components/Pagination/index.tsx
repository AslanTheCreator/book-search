import React, { FC } from 'react';
import styles from './Pagination.module.css';

interface IPagination {
  setPag: (num: number) => void;
  fetchBooks: () => void;
}

export const Pagination: FC<IPagination> = ({ setPag, fetchBooks }) => {
  const onClickLoad = () => {
    setPag(30);
    fetchBooks();
  };

  return (
    <div className={styles.root}>
      <button onClick={onClickLoad} className={styles.btn}>
        Load more
      </button>
    </div>
  );
};
