import s from './ButtonLogout.module.scss';
import PropTypes from 'prop-types';
import icons from '../../icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';

const IconLogout = () => {
  return (
    <svg className={s.diagram}>
      <use href={`${icons}#icon-log-out`}></use>
    </svg>
  );
};

export const ButtonLogout = () => {
  const dispatch = useDispatch();
  const className = `${s.button} ${s.secondary}`;
  return (
    <button
      type="button"
      onClick={() => dispatch(logoutUser())}
      className={className}
    >
      Log out <IconLogout />
    </button>
  );
};

ButtonLogout.propTypes = {
  variant: PropTypes.string,
};
