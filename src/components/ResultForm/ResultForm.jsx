import { Button } from 'components/Button/Button';
import { LabledInput } from 'components/LabledInput/LabledInput';
import s from './ResultForm.module.scss';
import { ModalAddBalance } from 'components/ModalAddBalance/ModalAddBalance';
import { usePopup } from 'hooks/usePopup';

const ResultForm = ({ title }) => {
  const { show, showPopup, closePopup } = usePopup();
  return (
    <div className={s.wrapper}>
      {title && <h2 className={s.title}>{title}</h2>}
      <div className={s.innerWrapper}>
        <LabledInput
          label="Number of years"
          value="0 years"
          className={s.firstInput}
          inputClassName={s.input}
        />
        <LabledInput
          label="Number of months"
          value="0 month"
          className={s.secondInput}
          inputClassName={s.input}
        />
        <div className={s.btnWrapper}>
          <Button variant="neutral" type="submit" className={s.submitButton}>
            Fits
          </Button>
          <Button variant="link" onClick={showPopup}>
            Add Balance
          </Button>
        </div>
      </div>
      <ModalAddBalance show={show} onClose={closePopup} />
    </div>
  );
};

export default ResultForm;
