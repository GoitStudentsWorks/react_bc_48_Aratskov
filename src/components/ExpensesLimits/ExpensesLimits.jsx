import { usePopup } from 'hooks/usePopup';
import { LabledInput } from 'components/LabledInput/LabledInput';
import { Button } from 'components/Button/Button';
import clsx from 'clsx';
import s from './ExpensesLimits.module.scss';
import { ModalAddIncome } from 'components/ModalAddIncome/ModalAddIncome';

const ExpensesLimits = () => {
  const { show, showPopup, closePopup } = usePopup();
  return (
    <div className={s.wrapper}>
      <div className={s.innerWrapper}>
        <LabledInput
          label="Daily limit"
          value="-600$"
          className={clsx(s.firstInput, s.inputWrapper)}
          inputClassName={s.input}
        />
        <LabledInput
          label="Monthly limit"
          value="-5000$"
          className={clsx(s.secondInput, s.inputWrapper)}
          inputClassName={s.input}
        />
        <div className={s.btnWrapper}>
          <Button variant="neutral" type="submit" className={s.submitButton}>
            Ready
          </Button>
          <Button variant="link" onClick={showPopup}>
            Add income
          </Button>
        </div>
      </div>
      <ModalAddIncome show={show} onClose={closePopup} />
    </div>
  );
};

export default ExpensesLimits;
