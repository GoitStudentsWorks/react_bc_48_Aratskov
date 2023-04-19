import Input from 'components/Input/Input';
import css from './PlanInputsList.module.css';

const PlanInputsList = ({
  onChange,
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
          id="salary"
          name="salary"
          value={salary}
          placeholder="Enter text"
          label="1. RFP of both spouses,"
          onChange={onChange}
        />
      </li>
      <li className={css.item}>
        <Input
          id="passiveIncome"
          name="passiveIncome"
          value={passiveIncome}
          placeholder="Enter text"
          label="2. Passive income, months,"
          onChange={onChange}
        />
      </li>
      <li className={css.item}>
        <Input
          id="savings"
          name="savings"
          value={savings}
          placeholder="Enter text"
          label="3. Savings,"
          onChange={onChange}
        />
      </li>
      <li className={css.item}>
        <Input
          id="cost"
          name="cost"
          value={cost}
          placeholder="Enter text"
          label="4. Specify the cost of your future apartment,"
          onChange={onChange}
        />
      </li>
      <li className={css.item}>
        <Input
          id="footage"
          name="footage"
          value={footage}
          placeholder="Enter text"
          label="5. Specify the number of sq.m. of your future apartment"
          onChange={onChange}
        />
      </li>
      <li className={css.item}>
        <Input
          id="procent"
          name="procent"
          value={procent}
          placeholder="Enter text"
          label="6. Accumulation, %"
          onChange={onChange}
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
