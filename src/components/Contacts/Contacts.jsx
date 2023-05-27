import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledButton,
  StyledContactListItemLi,
  StyledContactsListUL,
  StyledButtonsWrapper,
} from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter, getIsLoading } from 'redux/contacts/selectors';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
/* Modal */
import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
Modal.setAppElement('#modal-root');
/*  */

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(({ name }) => {
    // console.log(contacts);
    return name.toLowerCase().includes(filter.toLowerCase());
  });
};

export const Contacts = ({ onDeleteContact }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);
  const isFetching = useSelector(getIsLoading);

  /* Modal */
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');

  function openModal(name, number, id) {
    setIsOpen(true);
    setEditName(name);
    setEditNumber(number);
    setEditId(id);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleNameChange(event) {
    setEditName(event.target.value);
  }

  function handleNumberChange(event) {
    setEditNumber(event.target.value);
  }

  function handleEditContact(e) {
    e.preventDefault();
    dispatch(editContact({ id: editId, name: editName, number: editNumber }));
    closeModal();
  }
  /*  */

  return (
    // console.log(contacts),
    <StyledContactsListUL>
      {filteredContacts.map(({ id, name, number }) => (
        <StyledContactListItemLi key={id}>
          <p>
            {name}: {number}
          </p>
          <StyledButtonsWrapper>
            <StyledButton onClick={() => openModal(name, number, id)}>
              <EditNoteOutlinedIcon sx={{ fontSize: 19 }} />
            </StyledButton>
            <StyledButton
              onClick={() => onDeleteContact(id)}
              disabled={isFetching}
            >
              <DeleteOutlineIcon sx={{ fontSize: 16 }} />
            </StyledButton>
          </StyledButtonsWrapper>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>close</button>
            <div>Edit contact</div>
            <form onSubmit={handleEditContact}>
              <p>Contact ID {id}</p>
              <input value={editName} onChange={handleNameChange} />
              <input value={editNumber} onChange={handleNumberChange} />
              <button type="submit">Submit</button>
            </form>
          </Modal>
        </StyledContactListItemLi>
      ))}
    </StyledContactsListUL>
  );
};

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
