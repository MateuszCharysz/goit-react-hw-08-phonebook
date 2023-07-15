import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button/button';
import css from './contact-list.module.css';

const ContactList = ({ arr, btnHandler }) => {
  return (
    <ul className={css.contactList}>
      {arr.map(({ id, name, number }) => (
        <li className={css.contactList__item} key={id}>{`${name} ${number}`} <Button label='Delete' typeOfBtn='button' btnFunc={() => btnHandler(id)}/></li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  btnHandler: PropTypes.func.isRequired
};

export default ContactList;
