import React from 'react';
// import UserFormReg from 'components/userFormReg/UserFormReg';
import UserForm from 'components/userForm/UserForm';
import css from './pages.module.css'

const Register = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <UserForm typeOfForm={'Register'}></UserForm>
        
      </div>
    </div>
  );
};

export default Register;
