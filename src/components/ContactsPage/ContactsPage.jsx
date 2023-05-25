import { Title } from 'components/Title/Title';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import Filter from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { changeFilter } from 'redux/filter/filterSlice';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';
import { StyledContactsWrapper } from './ContactsPage.styled';
import { StyledBackground } from 'components/SharedStyles/Background.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const checkContact = (arr, newName) => {
    return arr.some(({ name }) => {
      return newName.toLowerCase() === name.toLowerCase();
    });
  };

  const handleAddContact = ({ name, number }) => {
    const check = checkContact(contacts, name);
    if (check) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name: name, number: number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <StyledBackground>
      <Title title={'Contacts'} />
      <AddContactForm addContact={handleAddContact} />
      {/* <Title title={'Contacts'} /> */}
      <Filter value={filter} onChange={handleFilterChange} />
      <StyledContactsWrapper>
        <Contacts onDeleteContact={handleDeleteContact} />
      </StyledContactsWrapper>
    </StyledBackground>
  );
}
