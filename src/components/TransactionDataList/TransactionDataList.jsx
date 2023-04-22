import Input from 'components/Input/Input';
import style from './TransactionDataList.module.scss';
import { SelectWithLabel } from 'components/SelectWithLabel/SelectWithLabel';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/Cashflow/cashflowSelectors';
import { useState } from 'react';

const TransactionDataList = ({ onChange, category, comment, sum }) => {
  const categories = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState({
    name: 'other',
    title: 'Other',
  });

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

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
        <SelectWithLabel
          name="category"
          value={selectedCategory}
          options={categories}
          label="Per category"
          onChange={handleCategoryChange}
        />
      </li>
      <li className={style.item}>
        <Input
          name="comment"
          value={comment}
          placeholder="Enter comment"
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
