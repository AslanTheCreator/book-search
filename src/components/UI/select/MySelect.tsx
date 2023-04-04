import React, { FC } from 'react';
import styles from './MySelect.module.css';

interface IMySelect {
  options: ICategory[];
  setSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

interface ICategory {
  name: string;
  value: string;
}

export const MySelect: FC<IMySelect> = ({ options, setSort, value }) => {
  return (
    <select value={value} onChange={setSort} className={styles.mySelect}>
      {options.map(({ name, value }, index) => (
        <option key={index} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};
