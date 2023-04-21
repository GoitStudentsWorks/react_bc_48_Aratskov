import clsx from 'clsx';
import { BasicInput } from '../BasicInput/BasicInput';
import s from './LabledInput.module.scss';

export const LabledInput = ({ label, value, className, inputClassName }) => {
  return (
    <div className={clsx(className, s.wrapper)}>
      <p className={s.label}>{label}</p>
      <BasicInput
        value={value}
        readOnly={true}
        className={clsx(inputClassName, s.input)}
      />
    </div>
  );
};
