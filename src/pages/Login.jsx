import React from 'react';
import { Helmet } from 'react-helmet';
// import UserFormLog from 'components/userFormLog/UserFormLog';
import UserForm from 'components/userForm/UserForm';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <UserForm typeOfForm={'Login'}></UserForm>
      {/* <UserFormLog></UserFormLog> */}
    </>
  );
};

export default Login;
