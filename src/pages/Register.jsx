import React from 'react';
// import UserFormReg from 'components/userFormReg/UserFormReg';
import UserForm from 'components/userForm/UserForm';
import css from './pages.module.css'

const Register = () => {
  return (
    <div className={css.background}>

      <UserForm typeOfForm={'Register'}></UserForm>
      {/* <UserFormReg></UserFormReg> */}
    </div>
  );
};

export default Register;
