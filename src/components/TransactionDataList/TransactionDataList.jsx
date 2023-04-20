import Input from 'components/Input/Input';
import css from './TransactionDataList.module.css';

const TransactionDataList = ({ onChange, category, comment, sum }) => {
  return (
    <ul>
      <li className={css.item}>
        <Input
          name={category}
          value={category}
          placeholder="Account balance: UAH 80,000"
          label="From account"
        />
      </li>
      <li className={css.item}>
        <Input
          name="category"
          value={category}
          placeholder="Other"
          label="Per category"
          onChange={onChange}
        />
      </li>
      <li className={css.item}>
        <Input
          name="comment"
          value={comment}
          placeholder="Concert tickets"
          label="Expense comment"
          onChange={onChange}
        />
      </li>
      <li className={css.item}>
        <Input
          name="sum"
          value={sum}
          placeholder="00.00"
          label="Sum"
          onChange={onChange}
        />
      </li>
    </ul>
  );
};
export default TransactionDataList;
