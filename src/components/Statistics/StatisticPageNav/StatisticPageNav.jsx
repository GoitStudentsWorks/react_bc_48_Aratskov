// import CategoriesList from '../CategoriesList/CategoriesList';
// import ExpensesList from '../ExpensesList/ExpensesList';
import { NavLink } from 'react-router-dom';

const StatisticPageNav = () => {
  return (
    <>
      {/* <ExpensesList /> */}
      {/* <CategoriesList /> */}
      <NavLink to="transactions">Expenses</NavLink>
      <NavLink to="categories">Categories</NavLink> 
      
    </>
  );
};

export default StatisticPageNav;
