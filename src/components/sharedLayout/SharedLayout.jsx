import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.header__nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.active : css.header__link
            }
          >
            Phonebook
          </NavLink>
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
        </nav>
      </header>
      <Suspense fallback={<h2>Lazy loading in action</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
