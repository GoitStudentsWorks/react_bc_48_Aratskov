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
import InfoDynamics from 'components/Dynamics/InfoDynamics/InfoDynamics';

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
        data: [800, 500, 800, 450, 750, 850, 950, 1000, 450, 600, 1000, 750],
        backgroundColor: 'rgba(243, 243, 243, 1)',
      },
    ],
  };

  const options = {
    indexAxis: 'x',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 11,
          boxHeight: 11,
          useBorderRadius: true,
          borderRadius: 5.5,
          textAlign: 'left',
          padding: 50,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: 10,
      },
    },
  };

  const optionsHorizontal = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 11,
          boxHeight: 11,
          useBorderRadius: true,
          borderRadius: 5.5,
          textAlign: 'left',
          padding: 50,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: 10,
      },
    },
  };

  const chartjsStyle = {
    width: 'auto',
    height: '500px',
    margin: 'auto auto',
  };

  return (
    <>
      <h2>Dynamics of expenses and savings</h2>
      <div >
        <Bar style={chartjsStyle} data={data} options={options} />
        <Bar style={chartjsStyle} data={data} options={optionsHorizontal} />
      </div>
      <div className={style.containerSelect}>
        <DynamicsSelect />
        <DynamicsList />
      </div>
      <div>
        <InfoDynamics />
        <Accumulate />
      </div>
    </>
  );
};

export default DynamicsPage;
