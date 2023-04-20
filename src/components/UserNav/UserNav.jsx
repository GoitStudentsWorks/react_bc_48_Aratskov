import st from './UserNav.module.scss';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <ul className={st.list}>
      <li className={st.item}>
        <NavLink
          to="/plan"
          style={({ isActive }) => ({
            color: isActive ? '#3A6AF5' : '#f3f3f3',
          })}
        >
          Personal plan
        </NavLink>
      </li>
      <li className={st.item}>
        <NavLink
          to="/cash-flow"
          style={({ isActive }) => ({
            color: isActive ? '#3A6AF5' : '#f3f3f3',
          })}
        >
          Cashflow
        </NavLink>
      </li>
      <li className={st.item}>
        <NavLink
          to="/dynamics"
          style={({ isActive }) => ({
            color: isActive ? '#3A6AF5' : '#f3f3f3',
          })}
        >
          Dynamics
        </NavLink>
      </li>
    </ul>
  );
};

export default UserNav;
