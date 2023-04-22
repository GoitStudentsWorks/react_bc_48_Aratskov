// import { useEffect, useState } from 'react';
// import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import s from './ExpensesList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsSelector } from 'redux/Statistics/StatisticsSelectors';
import { getTransactions } from 'redux/Statistics/StatisticsOperations';

// import {
//   selectIsLoading,
//   selectTransactions,
// } from 'redux/Statistics/StatisticsSelectors';


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
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactionsSelector);

  useEffect(() => {
    if (transactions.length) return;
    dispatch(getTransactions({ month: 2, year: 2023 }));
  }, []);

  if (!transactions.length) {
    return <div>No date</div>;
  }

  return (
    <div className={s.style}>
      <ul>
        {transactions.map(({ _id, category, comment, sum, date }) => (
          <ExpensesListItem
            key={_id}
            id={_id}
            category={category}
            comment={comment}
            sum={sum}
            date={date}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
