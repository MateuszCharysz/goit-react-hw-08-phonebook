import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
          <Route
            path="register"
            element={<Register />}
          />
          <Route path="login" element={<Login />} />
          <Route
            path="contacts"
            element={<Contacts />}
          />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default Appv2;
