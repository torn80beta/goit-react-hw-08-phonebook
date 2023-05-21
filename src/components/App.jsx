// import React, { useEffect, useState, useRef } from 'react';
// import AddContactForm from './AddContactForm/AddContactForm';
// import { nanoid } from 'nanoid';
// import { Title } from './Title/Title';
// import { Contacts } from './Contacts/Contacts';
// import Filter from './Filter/Filter';
// import { useDispatch } from 'react-redux';
// import { addContact, deleteContact } from 'redux/contactsSlice';
// import { changeFilter } from 'redux/filter/filterSlice';
// import { getContacts, getFilter } from 'redux/contacts/selectors';
// import { useSelector } from 'react-redux';
/* /// */
// import { useEffect } from 'react';
// import {
//   fetchContacts,
//   deleteContact,
//   addContact,
// } from 'redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
// import { useAuth } from 'hooks';
import { Layout } from './Layout/Layout';
// import { ContactsPage } from './ContactsPage/ContactsPage';
import { lazy } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('./ContactsPage/ContactsPage'));

const App = () => {
  // const { isRefreshing } = useAuth();

  // isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) :
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
