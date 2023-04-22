import { useEffect, useState } from 'react';
import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import s from './ExpensesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsSelector } from 'redux/Statistics/StatisticsSelectors';
import { getTransactions } from 'redux/Statistics/StatisticsOperations';

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
