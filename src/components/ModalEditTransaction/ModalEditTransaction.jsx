import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Input from '../Input/Input';
import s from './ModalEditTransaction.module.scss';
import { useState } from 'react';
import { SelectWithLabel } from 'components/SelectWithLabel/SelectWithLabel';

export const ModalEditTransaction = ({ show, onClose }) => {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState([
    { label: 'Other' },
    { label: 'Grossery' },
    { label: 'Food' },
  ]);
  const [comment, setComment] = useState('Bag');
  const [sum, setSum] = useState(1500);
  const [selectedOption, setSelectedOption] = useState(category[0]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('category:', category, 'comment:', comment, 'sum:', sum);
    form.reset();
    onClose();
  };

  const handleChange = selectedOption => {
    console.log('selectedOption:', selectedOption);
    setSelectedOption(selectedOption);
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
            label="Per category"
            value={selectedOption}
            options={category}
            onChange={handleChange}
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
