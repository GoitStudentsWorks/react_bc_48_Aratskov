import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import {
  getStatisticsDate,
  getTransactionsSelector,
} from 'redux/Statistics/StatisticsSelectors';
import {
  getCategories,
  getTransactions,
} from 'redux/Statistics/StatisticsOperations';
import s from './ExpensesList.module.css';

const ExpensesList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactionsSelector);

  const date = useSelector(getStatisticsDate);

  const month = date[0].monthNumber;
  // console.log(month);
  const year = date[0].year;
  // console.log(year);

  useEffect(() => {
    if (transactions.length) return;
    dispatch(getTransactions({ month, year }));
  }, []);

  return (
    <div className={s.style}>
      {!transactions.length ? (
        <div className={s.noty}>You have not added any transactions!</div>
      ) : (
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
      )}
    </div>
  );
};

export default ExpensesList;
