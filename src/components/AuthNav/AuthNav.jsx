import st from './AuthNav.module.css';
import { NavLink} from 'react-router-dom';
import { Button } from 'components/Button/Button';

const AuthNav = () => {
  return (
    <>
      <div className={st.buttons}>
        <div className={st.buttonLogin}>
          <NavLink to="/login">
            <Button variant="secondary" children={'Login'} nativeProps={{ style: { width: 80 } }}></Button>
          </NavLink>
        </div>
        <div className={st.buttonReg}>
          <NavLink to="/register">
            <Button variant="secondary" children={'Registration'} nativeProps={{ style: { width: 132 } }}></Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AuthNav;
