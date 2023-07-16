import React from 'react';
import css from '../sharedLayout/SharedLayout.module.css';
import { useAuthRoute } from 'hook/useAuthRoute';
import Button from 'components/button/button';
import { useDispatch } from 'react-redux';
import opAuth from 'redux/auth/opAuth';
import { NavLink } from 'react-router-dom';

const SharedLayoutPriv = () => {
  const dispatch = useDispatch();
  const { user } = useAuthRoute();

  const btnHandler = () => {
    dispatch(opAuth.logOut);
  };

  return (
    <>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? css.active : css.header__link)}
      >
        Phonebook
      </NavLink>
      <div className={css.header__sub}>
        <p className={css.header__link}>{user.email}</p>
        <Button
          label="Log Out"
          typeOfBtn="button"
          btnFunc={() => btnHandler()}
        />
      </div>
    </>
  );
};

export default SharedLayoutPriv;
