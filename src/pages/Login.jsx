import React from 'react';
import { Helmet } from 'react-helmet';
import UserForm from 'components/userForm/UserForm';

const Login = () => {
  return (
    <>
      <Helmet>Login</Helmet>
      <UserForm typeOfForm="Login"></UserForm>
    </>
  );
};

export default Login;
