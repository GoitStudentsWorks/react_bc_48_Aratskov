import style from './DynamicPage.module.scss';
import DynamicsList from 'components/Dynamics/DynamicsList/DynamicsList';
import DynamicsSelect from 'components/Dynamics/DynamicsSelect/DynamicsSelect';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Accumulate from 'components/Dynamics/AccumulateMore/AccumulateMore';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DynamicsPage = () => {
  const data = {
    labels: [
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Aug',
      'Sep',
    ],
    datasets: [
      {
        label: 'Accumulated',
        data: [
          400, 300, 800, 400, 300, 800, 400, 300, 800, 400, 300, 800, 400, 300,
          800,
        ],
        backgroundColor: 'rgba(99, 89, 233, 1)',
      },
      {
        label: 'Expenses',
        data: [600, 700, 500, 600, 700, 500, 600, 700, 500, 600, 700, 500],
        backgroundColor: 'rgba(58, 106, 245, 1)',
      },
      {
        label: 'Income',
        data: [
          1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
          1000,
        ],
        backgroundColor: 'rgba(243, 243, 243, 1)',
      },
    ],
  };

  const options = {};

  return (
    <>
      <h2>Dynamics of expenses and savings</h2>
      <div>
        <Bar data={data} options={options} />
      </div>
      <div className={style.containerSelect}>
        <DynamicsSelect />
        <DynamicsList />
      </div>
      <div>
        <Accumulate />
      </div>
    </>
  );
};

export default DynamicsPage;
