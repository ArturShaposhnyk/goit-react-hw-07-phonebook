import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContactsThunk } from '../redux/contactsThunks';
// import { selectIsLoading } from '../redux/selectors';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.subTitle}>Contacts</h2>
        <Filter />
        <ContactList />
        {/* {isLoading} */}
      </div>
    </>
  );
};

export default App;
