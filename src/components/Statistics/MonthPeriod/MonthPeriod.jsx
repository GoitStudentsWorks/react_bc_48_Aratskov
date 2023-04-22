import s from './MonthPeriod.module.scss';
import icons from '../../../assets/icons/sprite.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useState } from 'react';
import { getYear } from 'date-fns';
import { useDispatch } from 'react-redux';

const MonthPeriod = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const monthNumber = date.getMonth() + 1;
  const year = date.getFullYear();

  dispatch({
    type: 'statistics/addDate',
    payload: { monthNumber: monthNumber, year: year },
  });

  // const date = new Date('Wed Apr 19 2023 20:06:29');
  // const dayOfMonth = date.getDate();
  // const monthName = date.toLocaleString('en-US', { month: 'short' });

  console.log('startDate', date);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.style} onClick={onClick} ref={ref}>
      {value}
      <svg className={s.icon}>
        <use href={`${icons}#icon-calendar`}></use>
      </svg>
    </button>
  ));

  return (
    <>
      <div>
        <DatePicker
          customInput={<ExampleCustomInput />}
          selected={date}
          onChange={date => setDate(date)}
          dateFormat="MMMM, yyyy"
          showMonthYearPicker
          id="12"
          monthsShown="1"
          calendarClassName={s.calendar}
          popperClassName={s.d}
          wrapperClassName={s.v}
          showPopperArrow={false}
          renderCustomHeader={({
            date,
            decreaseYear,
            increaseYear,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className={s.calendarHeader}>
              <button
                style={{ border: 'none', marginLeft: '26.6px' }}
                onClick={decreaseYear}
                disabled={prevMonthButtonDisabled}
              >
                {'<'}
              </button>
              {getYear(date)}
              <button
                onClick={increaseYear}
                disabled={nextMonthButtonDisabled}
                style={{ border: 'none', marginRight: '26.6px' }}
              >
                {'>'}
              </button>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default MonthPeriod;
