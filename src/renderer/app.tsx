import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Routes, Route } from 'react-router-dom';
import app_actions from './actions';
import Dashboard from './components/dashboard/dashboard';
import Logout from './components/login/logout';

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
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Logout />} />
      </Routes>
    </div>
  );
}
