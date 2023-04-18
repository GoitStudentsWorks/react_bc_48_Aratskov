import { useState } from 'react';
import CategoriesListItem from './CategoriesListItem/CategoriesListItem';

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
    <div>
      <h2 style={{ paddingBottom: '20px' }}>Categories</h2>
      <ul>
        {expenses.map(item => (
          <CategoriesListItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
