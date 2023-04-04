import { FC } from 'react';
import styles from './BookItem.module.css';
import { Books } from '../../redux/books/types';

interface IBookItem {
  bookImg: string;
  book: Books;
}

export const BookItem: FC<IBookItem> = ({ book, bookImg }) => {
  return (
    <div className={styles.root}>
      <img className={styles.img} alt="" src={bookImg} />
      <div className={styles.bottom}>
        <a href="#" className={styles.categories}>
          {book.volumeInfo.categories}
        </a>
        <h2>{book.volumeInfo.title}</h2>
        <div>{book.volumeInfo.authors}</div>
      </div>
    </div>
  );
};
