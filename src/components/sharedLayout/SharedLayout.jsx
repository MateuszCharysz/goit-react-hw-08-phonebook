import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { useAuthRoute } from 'hook/useAuthRoute';
import SharedLayoutRest from 'components/sharedLayoutRest/SharedLayoutRest';
import SharedLayoutPriv from 'components/sharedLayoutPriv/SharedLayoutPriv';
import { useColor } from 'components/colorContext/ColorContext';

const SharedLayout = () => {
  const { setColorTheme } = useColor();
  const { isLoggedIn } = useAuthRoute();
  const colorHandler = e => {
    console.log(e);
    const { checked } = e.target;
    if (checked === true) {
      setColorTheme('dark');
    } else {
      setColorTheme('');
    }
  };
  return (
    <>
      <header className={css.header}>
        <nav className={css.header__nav}>
          {isLoggedIn ? <SharedLayoutPriv /> : <SharedLayoutRest />}
        </nav>
        <input type="checkbox" onChange={colorHandler}>
          
        </input>
      </header>
      <Suspense fallback={<h2>Lazy loading in action</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
