import st from './UserBar.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'components/Button/Button';

const UserBar = () => {
  return (
    <>
      <ul className={st.list}>
        <li className={st.item}>
          <NavLink to="/statistics/transactions">
            <button>Statistics</button>
          </NavLink>
        </li>
        <li className={st.item}>
          <span className={st.avatar}>N</span>
        </li>
        <li className={st.itemButton}>
          <Button variant="secondary" onClick={()=>console.log('click')}>
            Log out
          </Button>
        </li>
      </ul>
      
    </>
  );
};

export default UserBar;
