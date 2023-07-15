import React from 'react';
import App from 'components/App';

const Welcome = () => {
  return (
    <>
      <h1>Welcome to Phonebook by Mateusz</h1>
      <p>
        Below is Phonebook sandbox made with mockapi.io. If you register - you
        can register with fake data -  you will recive acces to individual phonelist.
      </p>
      <App />
    </>
  );
};

export default Welcome;
