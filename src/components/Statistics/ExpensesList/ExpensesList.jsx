import { useState } from 'react';
import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import s from './ExpensesList.module.css';

const initialState = [
  {
    name: 'Products',
    prise: '4800',
    categorie: 'House',
  },
  {
    name: 'Products1',
    prise: '4811',
    categorie: 'House1',
  },
  {
    name: 'Products2',
    prise: '4822',
    categorie: 'House2',
  },
];

const ExpensesList = () => {
  const [expenses] = useState(initialState);

  return (
    <div className={s.style}>
      <ul>
        {expenses.map(item => (
          <ExpensesListItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
