import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import {
  StyledInput,
  StyledErrorName,
  StyledErrorNumber,
  StyledButton,
  StyledLabel,
  StyledAddContactFormWrapper,
} from './AddContactForm.styled';
import * as yup from 'yup';
import { getIsLoading } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field.')
    .min(2, 'Name must be at least 13 characters.')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message: 'Name must contain: "a-z, A-Z, а-я, А-Я".',
      excludeEmptyString: false,
    }),
  number: yup
    .string()
    .required('Number is a required field.')
    .min(13, 'Number must be at least 13 characters.')
    .max(13, 'Number must be at most 13 characters.')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message: 'Number must contain: "0-9" and "+" or "-" symbols.',
        excludeEmptyString: false,
      }
    ),
});

const ErrorForm = ({ name }) => {
  return name === 'name' ? (
    <ErrorMessage
      name={name}
      render={message => <StyledErrorName>{message}</StyledErrorName>}
    />
  ) : (
    <ErrorMessage
      name={name}
      render={message => <StyledErrorNumber>{message}</StyledErrorNumber>}
    />
  );
};

const AddContactForm = ({ addContact }) => {
  const handleNameSubmit = (values, { resetForm }) => {
    // console.log(values);
    addContact(values);
    resetForm();
  };

  const isFetching = useSelector(getIsLoading);

  handleNameSubmit.propTypes = {
    values: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    resetForm: PropTypes.func.isRequired,
  };

  return (
    // console.log(isFetching),
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleNameSubmit}
    >
      <Form>
        <StyledAddContactFormWrapper>
          <StyledLabel htmlFor="name">
            <StyledInput
              type="text"
              name="name"
              placeholder="Name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorForm name="name" />
          </StyledLabel>

          <StyledLabel htmlFor="number">
            <StyledInput
              type="tel"
              name="number"
              placeholder="Phone number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorForm name="number" />
          </StyledLabel>
          <StyledButton type="submit" disabled={isFetching}>
            {isFetching ? '......Loading' : 'Add contact'}
          </StyledButton>
        </StyledAddContactFormWrapper>
      </Form>
    </Formik>
  );
};

export default AddContactForm;

ErrorForm.propTypes = {
  name: PropTypes.string.isRequired,
};

AddContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

initialValues.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
