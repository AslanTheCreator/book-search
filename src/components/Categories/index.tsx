import { FC } from 'react';
import { MySelect } from '../UI/select/MySelect';
import styles from './Categories.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCategories } from '../../redux/filter/slice';
import { CATEGORY_SELECT_OPTIONS } from '../../constants/form';

export const Categories: FC = () => {
  const categories = useAppSelector((state) => state.filter.categories);
  const dispatch = useAppDispatch();

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategories(event.target.value));
  };
  return (
    <div className={styles.root}>
      <span>Categories</span>
      <MySelect
        value={categories}
        setSort={onChangeSelect}
        options={CATEGORY_SELECT_OPTIONS}></MySelect>
    </div>
  );
};
