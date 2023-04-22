import s from './MonthPeriod.module.scss';
import icons from '../../../assets/icons/sprite.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useState } from 'react';
import { getYear } from 'date-fns';
import { Range } from 'immutable';
// import { DayPicker } from 'react-day-picker';

// const MonthPeriod = () => {
//   return <DayPicker />;
// };

// export default MonthPeriod;

const MonthPeriod = () => {
  const [date, setDate] = useState(new Date());

  // const date = new Date('Wed Apr 19 2023 20:06:29');
  // const dayOfMonth = date.getDate();
  const monthNumber = date.getMonth() + 1;
  // const monthName = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  // console.log(`Day: ${dayOfMonth}`);
  console.log(`Month: ${monthNumber}`);
  // console.log(`Month: ${monthName}`);
  console.log(`Year: ${year}`);

  console.log('startDate', date);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.style} onClick={onClick} ref={ref}>
      {value}
      <svg className={s.icon}>
        <use href={`${icons}#icon-calendar`}></use>
      </svg>
    </button>
  ));
  // const years = Range(2020, getYear(new Date()) + 1, 1);

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
          ////////////////////////////////////
          calendarClassName={s.calendar}
          popperClassName={s.d}
          wrapperClassName={s.v}
          // dayModifiers={s.a}
          // monthClassName={s.a}
          ////////////////////////////////////
          showPopperArrow={false}
          renderCustomHeader={({
            date,
            // changeYear,
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

              {/* <select
                style={{ border: 'none', backgroundColor: '#F3F3F3' }}
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select> */}

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
