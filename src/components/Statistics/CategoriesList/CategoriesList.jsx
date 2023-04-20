import { useState } from 'react';
import CategoriesListItem from './CategoriesListItem/CategoriesListItem';
import s from './CategoriesList.module.css';

const initialState1 = [
  {
    cost: '4800',
    categorie: 'House',
  },
  {
    cost: '4811',
    categorie: 'House1',
  },
  {
    cost: '4822',
    categorie: 'House2',
  },
];

const CategoriesList = () => {
  const [expenses] = useState(initialState1);
  return (
    <div className={s.style}>
      <ul>
        {expenses.map(item => (
          <CategoriesListItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
