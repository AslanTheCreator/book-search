import React, { FC } from 'react';
import styles from './BooksFound.module.css';
import { useAppSelector } from '../../redux/hooks';

export const BooksFound: FC = () => {
  const foundBooks = useAppSelector((state) => state.books.foundItems);
  return <div className={styles.root}>{`Found ${foundBooks} results`}</div>;
};
