import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { useAuthRoute } from 'hook/useAuthRoute';
import SharedLayoutRest from 'components/sharedLayoutRest/SharedLayoutRest';
import SharedLayoutPriv from 'components/sharedLayoutPriv/SharedLayoutPriv';

const SharedLayout = () => {
  const { isLoggedIn } = useAuthRoute();
  return (
    <>
      <header className={css.header}>
        <nav className={css.header__nav}>

          {isLoggedIn ? <SharedLayoutPriv /> : <SharedLayoutRest />}
        </nav>
      </header>
      <Suspense fallback={<h2>Lazy loading in action</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
