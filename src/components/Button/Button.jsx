import s from './Button.module.scss';
import PropTypes from 'prop-types';

export const Button = ({
  variant = 'primary',
  type = 'button',
  onClick,
  nativeProps,
  children,
}) => {
  const className = `${s.button} ${s[variant]}`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      {...nativeProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
};
