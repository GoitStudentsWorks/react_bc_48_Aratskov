import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import ShaderLayout from './ShaderLayout/ShaderLayout';

const CashflowPage = lazy(() => import('../pages/CashflowPage/CashflowPage'));
const OwnPlanPage = lazy(() => import('../pages/OwnPlanPage/OwnPlanPage'));
const DynamicsPage = lazy(() => import('../pages/DynamicsPage/DynamicsPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage/StatisticsPage'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShaderLayout/>}>
        <Route index element={<HomePage />} />
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
  );
};
