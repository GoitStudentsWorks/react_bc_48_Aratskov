import s from './MonthPeriod.module.css';
import icons from '../../../assets/icons/sprite.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useState } from 'react';
import { getYear } from 'date-fns';
import { Range } from 'immutable';

const MonthPeriod = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.style} onClick={onClick} ref={ref}>
      {value}
      <svg className={s.icon}>
        <use href={`${icons}#icon-calendar`}></use>
      </svg>
    </button>
  ));
  const years = Range(2020, getYear(new Date()) + 1, 1);

  return (
    <>
      <div>
        <DatePicker
          customInput={<ExampleCustomInput />}
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="MMMM, yyyy"
          showMonthYearPicker
          ////////////////////////////////////
          calendarClassName={s.calendar}
          popperClassName={s.d}
          wrapperClassName={s.v}
          popperModifiers={s.a}
          ////////////////////////////////////
          showPopperArrow={false}
          renderCustomHeader={({
            date,
            changeYear,
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

              <select
                style={{ border: 'none', backgroundColor: '#F3F3F3' }}
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

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
