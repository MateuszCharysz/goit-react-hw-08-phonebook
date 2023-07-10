import React from 'react';
import { Helmet } from 'react-helmet';
import UserForm from 'components/userForm/UserForm';

const Register = () => {
  return (
    <>
      <Helmet>Register</Helmet>
      <UserForm typeOfForm="Register"></UserForm>
    </>
  );
};

export default Register;
