import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import SharedLayout from './sharedLayout/SharedLayout';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

const Appv2 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Welcome />} />
          <Route path="register" element={<Login />} />
          <Route path="login" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<SharedLayout />} />
      </Routes>
    </>
  );
};

export default Appv2;
