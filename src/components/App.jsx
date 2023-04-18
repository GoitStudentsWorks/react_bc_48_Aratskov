import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import SharedLayout from './ShaderLayout/SharedLayout';
import ModalLogin from './ModalLogin/ModalLogin';
import ModalRegister from './ModalRegister/ModalRegister';
import Header from './Header/Header';

const CashflowPage = lazy(() => import('../pages/CashflowPage/CashflowPage'));
const OwnPlanPage = lazy(() => import('../pages/OwnPlanPage/OwnPlanPage'));
const DynamicsPage = lazy(() => import('../pages/DynamicsPage/DynamicsPage'));
const StatisticsPage = lazy(() =>
  import('../pages/StatisticsPage/StatisticsPage')
);

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<ModalLogin />} />
          <Route path="register" element={<ModalRegister />} />
          <Route path="plan" element={<OwnPlanPage />} />
          <Route path="cash-flow" element={<CashflowPage />} />
          <Route path="dynamics" element={<DynamicsPage />} />
          <Route path="statistics" element={<StatisticsPage />}>
            <Route path="transactions" element={<div>Expenses</div>} />
            <Route path="categories" element={<div>Categories</div>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
