import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../sharedLayout/SharedLayout.module.css';

const SharedLayoutRest = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.active : css.header__link)}
      >
        Phonebook
      </NavLink>
      <div className={css.header__sub}>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? css.active : css.header__link
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? css.active : css.header__link
          }
        >
          Login
        </NavLink>
      </div>
    </>
  );
};

export default SharedLayoutRest;
