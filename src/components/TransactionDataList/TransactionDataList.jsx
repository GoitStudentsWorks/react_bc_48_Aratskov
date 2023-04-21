import Input from 'components/Input/Input';
import style from './TransactionDataList.module.scss';

const TransactionDataList = ({ onChange, category, comment, sum }) => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <Input
          name={category}
          value={category}
          placeholder="Account balance: UAH 80,000"
          label="From account"
        />
      </li>
      <li className={style.item}>
        <Input
          name="category"
          value={category}
          placeholder="Other"
          label="Per category"
          onChange={onChange}
        />
      </li>
      <li className={style.item}>
        <Input
          name="comment"
          value={comment}
          placeholder="Concert tickets"
          label="Expense comment"
          onChange={onChange}
        />
      </li>
      <li className={style.item}>
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
