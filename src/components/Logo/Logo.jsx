import icons from '../../icons/sprite.svg';
import st from './Logo.module.css';

const LogoIcon = () => {
  return (
    <svg className={st.image}>
      <use href={`${icons}#icon-logo`}></use>
    </svg>
  );
};

const Logo = () => {
  return (
    <div className={st.wrapper}>
      <LogoIcon />
      <p className={st.title}>Finance</p>
    </div>
  );
};

export default Logo;


