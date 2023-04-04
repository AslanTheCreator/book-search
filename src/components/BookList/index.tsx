import { FC } from 'react';
import { BookItem } from '../BookItem';
import styles from './BookList.module.css';
import { useAppSelector } from '../../redux/hooks';

export const BookList: FC = () => {
  const { items, status } = useAppSelector((state) => state.books);
  return (
    <div className={styles.root}>
      {status === 'error' ? (
        <div>
          <h2>Произошла ошибка!</h2>
        </div>
      ) : status === 'loading' ? (
        'Идет загрузка'
      ) : (
        items.map((book) => {
          try {
            return (
              <BookItem key={book.id} book={book} bookImg={book.volumeInfo.imageLinks.thumbnail} />
            );
          } catch (error) {
            return <BookItem key={book.id} book={book} bookImg="" />;
          }
        })
      )}
    </div>
  );
};
