import clsx from 'clsx';
import s from './Button.module.scss';
import PropTypes from 'prop-types';

export const Button = ({
  variant = 'primary',
  type = 'button',
  onClick,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(className, s.button, s[variant])}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
};
