import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Routes, Route } from 'react-router-dom';
import app_actions from './actions';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/common/header';
import Logout from './components/login/logout';
import Billing from './components/billing/billing';
import NoDataFound from './components/common/noDataFound';

export default function App() {

  const isSideMenuOpenValue = useSelector((state: any) => {
    return state.App.isSideMenuOpen;
  });

  const dispatch = useDispatch();

  const [errorStats, handleErrorStats] = React.useState(undefined);

  const handleSideMenu = () => {
    dispatch(app_actions.user_actions.isSideMenuOpen(!isSideMenuOpenValue));
  };

  return (
    <div>
      <Header handleSideMenu={handleSideMenu} errorStats={errorStats} handleErrorStats={handleErrorStats} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/billing" element={<Billing/>} />
        <Route path="/inventory" element={<NoDataFound/>} />
        <Route path="/reports" element={<NoDataFound/>} />
        <Route path="/accounts" element={<NoDataFound/>} />
        <Route path="/promotions" element={<NoDataFound/>} />
        <Route path="/settings" element={<NoDataFound/>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}
