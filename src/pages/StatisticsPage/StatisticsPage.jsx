import Statistics from 'components/Statistics/Statistics';
import { Outlet } from 'react-router-dom';

const StatisticsPage = () => {
  return (
    <>
      <Statistics />
      <Outlet />
    </>
  );
};

export default StatisticsPage;

