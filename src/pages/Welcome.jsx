import React from 'react';
import Sandbox from 'components/sandbox/Sandbox';
import css from './pages.module.css';

const Welcome = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <h1>Welcome to Phonebook by Mateusz</h1>
        <p>
          Below is Phonebook sandbox made with mockapi.io. If you register - you
          can register with fake data - you will recive acces to individual
          phonelist. Backend of user data - connections-api.herokuapp.com/docs.
        </p>
      </div>
      <Sandbox/>
    </div>
  );
};

export default Welcome;
