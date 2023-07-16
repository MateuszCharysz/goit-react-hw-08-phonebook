import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import SharedLayout from './sharedLayout/SharedLayout';
import PrivateRoute from 'js/PrivateRoute';
import RestrictedRoute from 'js/RestricredRoute';

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
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Appv2;
