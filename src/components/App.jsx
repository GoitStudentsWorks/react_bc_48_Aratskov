import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import SharedLayout from './SharedLayout/SharedLayout';
import ModalLogin from './ModalLogin/ModalLogin';
import ModalRegister from './ModalRegister/ModalRegister';
import ExpensesList from './Statistics/ExpensesList/ExpensesList';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/Auth/authOperations';

const CashflowPage = lazy(() => import('../pages/CashflowPage/CashflowPage'));
const OwnPlanPage = lazy(() => import('../pages/OwnPlanPage/OwnPlanPage'));
const DynamicsPage = lazy(() => import('../pages/DynamicsPage/DynamicsPage'));
const StatisticsPage = lazy(() =>
  import('../pages/StatisticsPage/StatisticsPage')
);
const CategoriesList = lazy(() =>
  import('./Statistics/CategoriesList/CategoriesList')
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<ModalLogin />} />
        <Route path="register" element={<ModalRegister />} />
        <Route path="plan" element={<OwnPlanPage />} />
        <Route path="cash-flow" element={<CashflowPage />} />
        <Route path="dynamics" element={<DynamicsPage />} />
        <Route path="statistics" element={<StatisticsPage />}>
          <Route path="transactions" element={<ExpensesList />} />
          <Route path="categories" element={<CategoriesList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
