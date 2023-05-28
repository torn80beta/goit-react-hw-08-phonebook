import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Layout } from './Layout/Layout';
import { useEffect, lazy } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import {
  StyledAppWrapper,
  StyledMobileWrapper,
  StyledPhone,
  StyledPhoneMirror,
  StyledTopWrapper,
  StyledCamera,
  StyledLine,
} from './App.styled';
// import { MobileWrapper } from './MobileWrapper/MobileWrapper';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('./ContactsPage/ContactsPage'));

const App = () => {
  useEffect(() => {
    document.title = 'PhoneBook';
  }, []);

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <StyledAppWrapper>
      <StyledMobileWrapper>
        <StyledPhone>
          <StyledPhoneMirror>
            <StyledTopWrapper>
              <StyledCamera></StyledCamera>
              <StyledLine></StyledLine>
            </StyledTopWrapper>

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
                    <RestrictedRoute
                      redirectTo="/contacts"
                      component={<LoginPage />}
                    />
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<ContactsPage />}
                    />
                  }
                />
              </Route>
            </Routes>
          </StyledPhoneMirror>
        </StyledPhone>
      </StyledMobileWrapper>
    </StyledAppWrapper>
  );
};

export default App;
