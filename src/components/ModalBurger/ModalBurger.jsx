import Modal from 'components/Modal/Modal';
import st from './ModalBurger.module.scss';
import UserNav from 'components/UserNav/UserNav';
import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';

const ModalBurger = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose} className={st.popup}>
      <UserNav />
      <ButtonLogout />
    </Modal>
  );
};

export default ModalBurger;