import propTypes from 'prop-types';
import React, { useState } from 'react';
import initialState from './initialState.js';
import styles from './contactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setState({ ...initialState });
  };

  const { name, number } = state;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>Name </label>
      <input
        className={styles.formName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      />
      <label className={styles.formLabel}>Number </label>
      <input
        className={styles.formNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleChange}
      />
      <button className={styles.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
