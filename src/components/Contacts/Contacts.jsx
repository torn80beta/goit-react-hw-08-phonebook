import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledButton,
  StyledContactListItemLi,
  StyledContactsListUL,
  StyledButtonsWrapper,
  StyledModalCloseButton,
} from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter, getIsLoading } from 'redux/contacts/selectors';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
/* Modal */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { StyledModal } from './Contacts.styled';
import { StyledBackground } from 'components/SharedStyles/Background.styled';
import {
  StyledForm,
  StyledH2,
  StyledInput,
  StyledSubmitButton,
} from 'components/SharedStyles/Form.styled';
import CloseIcon from '@mui/icons-material/Close';
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
          <StyledModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            parentSelector={() => document.querySelector('#modalOut')}
            contentLabel="Modal"
            style={{
              overlay: {
                backgroundColor: 'transparent',
              },
              content: {
                color: 'lightsteelblue',
              },
            }}
          >
            <StyledBackground>
              <StyledForm onSubmit={handleEditContact}>
                <StyledH2 style={{ color: '#2a363b' }}>Edit contact</StyledH2>
                {/* <p>Contact ID {id}</p> */}
                <StyledInput value={editName} onChange={handleNameChange} />
                <StyledInput value={editNumber} onChange={handleNumberChange} />
                <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
              </StyledForm>
              <StyledModalCloseButton onClick={closeModal}>
                <CloseIcon />
              </StyledModalCloseButton>
            </StyledBackground>
          </StyledModal>
        </StyledContactListItemLi>
      ))}
    </StyledContactsListUL>
  );
};

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
