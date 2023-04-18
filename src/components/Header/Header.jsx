import { NavLink } from "react-router-dom";

const Header = () => {
    return (
    <header>
      header
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      </header>
);
  };
  
  export default Header;