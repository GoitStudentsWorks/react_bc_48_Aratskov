import { useState } from 'react';
import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import s from './ExpensesList.module.css';

const initialState = [
  {
    name: 'Products',
    prise: '4800',
    categorie: 'Houseweafawef',
    id: 1,
  },
  {
    name: 'Products',
    prise: '4800',
    categorie: 'Houseweafawef',
    id: 2,
  },
  {
    name: 'Products',
    prise: '4800',
    categorie: 'Houseweafawef',
    id: 3,
  },
  {
    name: 'Products',
    prise: '4800',
    categorie: 'Houseweafawef',

    id: 4,
  },
  {
    name: 'Products1',
    prise: '4811',
    categorie: 'House1',
    id: 5,
  },
  {
    name: 'Products2',
    prise: '4822',
    categorie: 'House2',
    id: 6,
  },
  {
    name: 'Products2wqedawed',
    prise: '4822',
    categorie: 'House2',
    id: 7,
  },
  {
    name: 'Products2',
    prise: '4822',
    categorie: 'House2',
    id: 7,
  },
  {
    name: 'Products2',
    prise: '4822',
    categorie: 'House2',
    id: 8,
  },
];

const ExpensesList = () => {
  const [expenses, setExpenses] = useState(initialState);

  const deleteContact = id => {
    setExpenses(prevExpenses => prevExpenses.filter(el => el.id !== id));
  };

  return (
    <div className={s.style}>
      <ul>
        {expenses.map(item => (
          <ExpensesListItem item={item} onDeleteItem={deleteContact} />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
