import { BasicInput } from 'components/BasicInput/BasicInput';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import s from './ModalAddIncome.module.scss';

export const ModalAddIncome = ({ show, onClose }) => {
  const addIncome = value => {
    console.log('add income: ', value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.input.value;
    form.reset();
    console.log('input:', input);
    addIncome(input);
    onClose();
  };

  return (
    <div>
      {/* <Button onClick={showPopup} nativeProps={{ style: { width: 150 } }}>
        Add income
      </Button> */}
      <Modal show={show} showCloseBtn={true} onClose={onClose}>
        <form action="" onSubmit={handleSubmit}>
          <BasicInput name="input" placeholder="Enter income" />
          <div className={s.btnBox}>
            <Button variant="primary" type="submit">
              Add
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
