import MonthPeriod from './MonthPeriod/MonthPeriod';
import StatisticPageNav from './StatisticPageNav/StatisticPageNav';
import s from './Statistics.module.css';

const Statistics = () => {
  return (
    <div className={s.style}>
      <StatisticPageNav />
      <MonthPeriod />
    </div>
  );
};

export default Statistics;
