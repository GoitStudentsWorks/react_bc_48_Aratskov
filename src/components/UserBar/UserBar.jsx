import st from './UserBar.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import icons from '../../icons/sprite.svg';
import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';

const IconDiagram = () => {
  return (
    <svg className={st.diagram}>
      <use href={`${icons}#icon-rectangle`}></use>
    </svg>
  );
};

const IconBurger = () => {
    return (
      <svg className={st.diagram}>
        <use href={`${icons}#icon-rectangle`}></use>
      </svg>
    );
  };

//   const IconLogout = () => {
//     return (
//       <svg className={st.diagram}>
//         <use href={`${icons}#icon-log-out`}></use>
//       </svg>
//     );
//   };

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
        <li className={st.item}>
          
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
