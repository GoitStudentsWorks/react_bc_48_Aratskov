import Input from 'components/Input/Input';
import css from './PlanInputsList.module.css'

const PlanInputsList = ({
  salary,
  passiveIncome,
  savings,
  cost,
  footage,
  procent,
}) => {
  return (
    <ul>
      <li className={css.item}>
        <Input
          name={salary}
          value={salary}
          placeholder="Enter text"
          label="1. RFP of both spouses,"
        />
      </li>
      <li className={css.item}>
        <Input
          name={passiveIncome}
          value={passiveIncome}
          placeholder="Enter text"
          label="2. Passive income, months,"
        />
      </li>
      <li className={css.item}>
        <Input
          name={savings}
          value={savings}
          placeholder="Enter text"
          label="3. Savings,"
        />
      </li>
      <li className={css.item}>
        <Input
          name={cost}
          value={cost}
          placeholder="Enter text"
          label="4. Specify the cost of your future apartment,"
        />
      </li>
      <li className={css.item}>
        <Input
          name={footage}
          value={footage}
          placeholder="Enter text"
          label="5. Specify the number of sq.m. of your future apartment"
        />
      </li>
      <li className={css.item}>
        <Input
          name={procent}
          value={procent}
          placeholder="Enter text"
          label="6. Accumulation, %"
        />
        <p className={css.description}>
          Specify the percentage that you would like to accumulate per month
          from the total amount of income and you will see when you reach the
          goal
        </p>
      </li>
    </ul>
  );
};
export default PlanInputsList;
