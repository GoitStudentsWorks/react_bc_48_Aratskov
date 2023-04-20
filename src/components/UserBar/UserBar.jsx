import st from './UserBar.module.scss';
import { NavLink } from 'react-router-dom';
import ModalBurger from 'components/ModalBurger/ModalBurger';

import icons from 'assets/icons/sprite.svg';
// import iconsBurg from '../../icons/menu.svg';
import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';

const IconDiagram = () => {
  return (
    <svg className={st.diagram}>
      <use href={`${icons}#icon-rectangle`}></use>
    </svg>
  );
};

const handlerBurger = () =>{
  return(
    <ModalBurger />
  )
}

const IconBurger = () => {
    return (
      <svg className={st.diagram} onClick={handlerBurger}>
        <use href={`${icons}#icon-burger-menu`}></use>
      </svg>
    );
  };

const UserBar = () => {
  return (
    <>
      <ul className={st.list}>
        <li className={st.item}>
          <NavLink to="/statistics/transactions">
            <IconDiagram />
          </NavLink>
        </li>
        <li className={st.item}>
          <span className={st.avatar}>N</span>
        </li>
        <li className={st.itemBurger}>
          
            <IconBurger />
          
        </li>
        <li className={st.itemButton}>
          <ButtonLogout />
        </li>
      </ul>
      
    </>
  );
};

export default UserBar;
