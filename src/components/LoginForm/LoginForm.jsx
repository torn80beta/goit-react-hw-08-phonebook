import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/operations';
import { StyledBackground } from 'components/SharedStyles/Background.styled';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSubmitButton,
  StyledH2,
  StyledError,
} from 'components/SharedStyles/Form.styled';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { clearLoginError } from 'redux/auth/slice';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { loginError } = useAuth();

  useEffect(() => {
    if (!loginError) {
      return;
    }
    return () => {
      dispatch(clearLoginError(false));
    };
  }, [loginError, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      userLogin({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="on">
      <StyledBackground>
        <StyledH2>Log In</StyledH2>
        {loginError ? (
          <StyledError>Wrong username or password</StyledError>
        ) : null}
        <StyledLabel>
          <StyledInput type="email" name="email" placeholder="Email" />
        </StyledLabel>
        <StyledLabel>
          <StyledInput type="password" name="password" placeholder="Password" />
        </StyledLabel>
        <StyledSubmitButton type="submit">Log In</StyledSubmitButton>
      </StyledBackground>
    </StyledForm>
  );
};
