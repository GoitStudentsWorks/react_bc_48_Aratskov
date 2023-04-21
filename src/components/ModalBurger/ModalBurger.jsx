import st from './ModalBurger.module.scss';
import UserNav from 'components/UserNav/UserNav';
import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';

const ModalBurger = () => {
  return (
    <>
    <div className='container'>
      <div className={st.burger}>
        <UserNav />
        <div className={st.logoutWrap}>
        <div className={st.logout}>
        <ButtonLogout />
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ModalBurger;
