import s from './MonthPeriod.module.css';
import icons from '../../../assets/icons/sprite.svg';

const MonthPeriod = () => {
  return (
    <>
      <ul className={s.style}>
        <li className={s.name}>January, 2023</li>
        <li className={s.test}>
          <svg className={s.icon}>
            <use href={`${icons}#icon-calendar`}></use>
          </svg>
        </li>
      </ul>
    </>
  );
};

export default MonthPeriod;
