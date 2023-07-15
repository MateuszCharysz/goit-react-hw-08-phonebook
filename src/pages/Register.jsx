import React from 'react';
import { Helmet } from 'react-helmet';
// import UserFormReg from 'components/userFormReg/UserFormReg';
import UserForm from 'components/userForm/UserForm';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <UserForm typeOfForm={'Register'}></UserForm>
      {/* <UserFormReg></UserFormReg> */}
    </>
  );
};

export default Register;
