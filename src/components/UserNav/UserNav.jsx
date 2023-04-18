import { NavLink } from "react-router-dom";

const UserNav = () =>{
    return(
        <>UserNav
         <NavLink to="/plan">PlanPage</NavLink>
      <NavLink to="/cash-flow">Expenses</NavLink>
      <NavLink to="/dynamics">Dynamics</NavLink>
      </>
    )
}

export default UserNav;