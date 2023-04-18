import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from 'pages/HomePage';

const CashflowPage = lazy(() => import('../pages/CashflowPage'));
const OwnPlanPage = lazy(() => import('../pages/OwnPlanPage'));
const DynamicsPage = lazy(() => import('../pages/DynamicsPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<>ShaderLayout</>}>
        <Route index element={<HomePage />} />
        <Route path="plan" element={<OwnPlanPage />} />
        <Route path="cash-flow" element={<CashflowPage />} />
        <Route path="dynamics" element={<DynamicsPage />} />
        <Route path="dynamics" element={<StatisticsPage />}>
          <Route path="expenses" element={<div>Expenses</div>} />
          <Route path="categories" element={<div>Categories</div>} />
        </Route>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
