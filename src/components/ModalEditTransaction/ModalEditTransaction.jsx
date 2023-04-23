import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Input from '../Input/Input';
import s from './ModalEditTransaction.module.scss';
import { useState } from 'react';
import { SelectWithLabel } from 'components/SelectWithLabel/SelectWithLabel';
import svg from '../../assets/icons/sprite.svg';
import { useSelector } from 'react-redux';
import { selectCategoriesWithIcons } from 'redux/Cashflow/cashflowSelectors';

export const ModalEditTransaction = ({
  show,
  onClose,
  categoryName,
  commentName,
  sumName,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState([
    { label: 'Other' },
    { label: 'Grossery' },
    { label: 'Food' },
  ]);

  const [comment, setComment] = useState(commentName);
  const [sum, setSum] = useState(sumName);
  const [selectedOption, setSelectedOption] = useState(categoryName);


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // console.log('category:', category, 'comment:', comment, 'sum:', sum);
    form.reset();
    onClose();
  };


  const handleChange = selectedOption => {
    // console.log('selectedOption:', selectedOption);
    setSelectedOption(selectedOption);
  };


  // const handleChange = selectedOption => {
  //   console.log('selectedOption:', selectedOption);
  //   setSelectedOption(selectedOption);
  // };
  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };
  return (
    <Modal
      show={show}
      showCloseBtn={true}
      onClose={onClose}
      className={s.popup}
    >
      <form action="" onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <SelectWithLabel
            name="category"
            value={selectedCategory}
            options={categories}
            label="Per category"
            onChange={handleCategoryChange}
          />

          <Input
            label="Expense comment"
            value={comment}
            name="comment"
            onChange={e => {
              setComment(e.target.value);
            }}
          />
          <Input
            label="Sum"
            value={Number(sum).toFixed(2)}
            name="sum"
            onChange={e => {
              setSum(e.target.value);
            }}
          />
        </div>
        <Button variant="primary" type="submit" className={s.btnBox}>
          Edit
        </Button>
      </form>
    </Modal>
  );
};
