import React from 'react';
import { Helmet } from 'react-helmet';
import UserFormLog from 'components/userForm/UserFormLog';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <UserFormLog></UserFormLog>
    </>
  );
};

export default Login;
