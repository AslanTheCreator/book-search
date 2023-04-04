import React, { FC, useCallback } from 'react';
import styles from './SearchBook.module.css';
import { useAppDispatch } from '../../redux/hooks';
import { setSearch } from '../../redux/filter/slice';
import debounce from 'lodash.debounce';

export const SearchBook: FC = () => {
  const [value, setValue] = React.useState<string>('');
  const dispatch = useAppDispatch();

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearch(str));
    }, 150),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        value={value}
        onChange={onChangeInput}
        placeholder="Введите название"
        className={styles.input}
      />
      <button className={styles.button} type="submit">
        Найти
      </button>
    </div>
  );
};
