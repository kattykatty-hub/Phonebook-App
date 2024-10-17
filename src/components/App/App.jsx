import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading } from '../../redux/contactsSlice';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default App;
