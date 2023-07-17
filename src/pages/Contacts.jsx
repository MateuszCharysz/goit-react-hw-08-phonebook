import React from 'react';
import ContactsApp from 'components/contactsApp/ContactsApp';
import css from './pages.module.css'

const Contacts = () => {
  return (
    <div className={css.background}>
      <ContactsApp />
    </div>
  );
};

export default Contacts;
