import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContactThunk } from '../../redux/contactsThunks';
import { selectAllContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [showForm, setShowForm] = useState(true);

  const { contacts } = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();

    const isAdded = contacts.find(
      el => el.name.toLowerCase() === normalizedName
    );

    if (isAdded) {
      alert(`${name}: is already in contacts. Please make corrections.`);
      setShowForm(false);
      return;
    }

    dispatch(addContactThunk({ id: nanoid(), name, number }));
    alert(`Contact ${name} has been added to your Contacts`);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
    setShowForm(true);
  };

  const handleAlertClose = () => {
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <form className={css.contactForm} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor="exampleInputEmail1">
            Name
          </label>
          <input
            className={css.input}
            name="name"
            type="text"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={handleChange}
            required
          />
          <label className={css.label} htmlFor="exampleInputNumber">
            Number
          </label>
          <input
            className={css.input}
            type="tel"
            name="number"
            id="exampleInputNumber"
            value={number}
            onChange={handleChange}
            required
          />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      ) : (
        <div>
          <p>Please make corrections to the entered data</p>
          <button onClick={handleAlertClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default ContactForm;
