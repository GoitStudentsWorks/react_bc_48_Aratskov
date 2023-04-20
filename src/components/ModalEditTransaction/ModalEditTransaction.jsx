import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Input from '../Input/Input';
import s from './ModalEditTransaction.module.scss';
import { useState } from 'react';

export const ModalEditTransaction = ({ show, onClose }) => {
  const [category, setCategory] = useState('Other');
  const [comment, setComment] = useState('Bag');
  const [sum, setSum] = useState(1500);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('category:', category, 'comment:', comment, 'sum:', sum);
    form.reset();
    onClose();
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
          <Input
            label="Per category"
            value={category}
            name="category"
            onChange={e => {
              setCategory(e.currentTarget.value);
            }}
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
