import clsx from 'clsx';
import s from './BasicInput.module.scss';

export const BasicInput = ({ name, className, ...props }) => {
  return (
    <input
      id={name}
      className={clsx(className, s.input)}
      type="text"
      name={name}
      {...props}
    />
  );
};
