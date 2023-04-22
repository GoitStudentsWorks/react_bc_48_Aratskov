import { useEffect, useState } from 'react';
import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import s from './ExpensesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectTransactions,
} from 'redux/Statistics/StatisticsSelectors';
import { getTransaction } from 'redux/Statistics/StatisticsOperations';

// const initialState = [
//   {
//     name: 'Products',
//     prise: '4800',
//     categorie: 'Houseweafawef',
//     id: 1,
//     month: 10,
//   },
//   {
//     name: 'Products',
//     prise: '4800',
//     categorie: 'Houseweafawef',
//     id: 2,
//     month: 11,
//   },
//   {
//     name: 'Products',
//     prise: '4800',
//     categorie: 'Houseweafawef',
//     id: 3,
//     month: 12,
//   },
//   {
//     name: 'Products',
//     prise: '4800',
//     categorie: 'Houseweafawef',
//     id: 4,
//     month: 12,
//   },
//   {
//     name: 'Products1',
//     prise: '4811',
//     categorie: 'House1',
//     id: 5,
//     month: 11,
//   },
//   {
//     name: 'Products2',
//     prise: '4822',
//     categorie: 'House2',
//     id: 6,
//     month: 10,
//   },
//   {
//     name: 'Products2wqedawed',
//     prise: '4822',
//     categorie: 'House2',
//     id: 7,
//     month: 12,
//   },
//   {
//     name: 'Products2',
//     prise: '4822',
//     categorie: 'House2',
//     id: 7,
//     month: 11,
//   },
//   {
//     name: 'Products2',
//     prise: '4822',
//     categorie: 'House2',
//     id: 8,
//     month: 10,
//   },
// ];

const ExpensesList = () => {
  // const [expenses, setExpenses] = useState(initialState);

  // const transaction = useSelector(selectTransactions);
  // console.log(transaction);

  // const deleteContact = id => {
  //   setExpenses(prevExpenses => prevExpenses.filter(el => el.id !== id));
  // };

  return (
    <div className={s.style}>
      <ul>
        <li>12</li>
        {/* {expenses.map(item => (
          <ExpensesListItem item={item} onDeleteItem={deleteContact} />
        ))} */}
      </ul>
    </div>
  );
};

export default ExpensesList;
