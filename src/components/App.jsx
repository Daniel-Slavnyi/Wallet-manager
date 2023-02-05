import { Route, Routes } from 'react-router-dom';

import DashboardLayout from 'pages/DashboardLayout/DashboardLayout';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterLayout from 'pages/RegisterLayout/RegisterLayout';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import StatisticPage from 'pages/StatisticPage/StatisticPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterLayout />}>
          <Route index element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="statistic" element={<StatisticPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
