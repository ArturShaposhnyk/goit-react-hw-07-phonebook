import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from '../../redux/contactsThunks';
import { selectFilteredContacts } from '../../redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  // console.log('contacts', contacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id, name) => {
    dispatch(deleteContactThunk(id));
    return alert(`Contact ${name} has been deleted from your Contacts`);
  };
  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(({ name, number, id }) => {
          return (
            <li className={css.contact} key={id}>
              {name}: <span>{number}</span>
              <button
                className={css.deleteButton}
                type="button"
                onClick={() => onDeleteContact(id, name)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ContactList;
