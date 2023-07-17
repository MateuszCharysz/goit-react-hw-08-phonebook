import React from 'react';
import css from './pages.module.css';
import UserForm from 'components/userForm/UserForm';

const Login = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <UserForm typeOfForm={'Login'}></UserForm>
      </div>
    </div>
  );
};

export default Login;
