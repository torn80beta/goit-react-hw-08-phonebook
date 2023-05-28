import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledH2,
  StyledSubmitButton,
  StyledError,
} from '../SharedStyles/Form.styled';
import { StyledBackground } from 'components/SharedStyles/Background.styled';
import { useAuth } from 'hooks';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { regError } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    // console.log(isError),
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledBackground>
        <StyledH2>Registration</StyledH2>
        {regError ? <StyledError>Wrong username or email</StyledError> : null}
        <StyledLabel>
          <StyledInput
            type="text"
            name="name"
            placeholder="Username"
            autoComplete="on"
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="on"
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInput type="password" name="password" placeholder="Password" />
        </StyledLabel>
        <StyledSubmitButton type="submit">Register</StyledSubmitButton>
      </StyledBackground>
    </StyledForm>
  );
};
