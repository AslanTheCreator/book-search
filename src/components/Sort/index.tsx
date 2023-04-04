import React, { FC } from 'react';
import { MySelect } from '../UI/select/MySelect';
import styles from './Sort.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSort } from '../../redux/filter/slice';
import { SORT_SELECT_OPTIONS } from '../../constants/form';

export const Sort: FC = () => {
  const sort = useAppSelector((state) => state.filter.sort);
  const dispatch = useAppDispatch();

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(event.target.value));
  };
  return (
    <div className={styles.root}>
      <span>Sorting by</span>
      <MySelect value={sort} setSort={onChangeSelect} options={SORT_SELECT_OPTIONS} />
    </div>
  );
};
