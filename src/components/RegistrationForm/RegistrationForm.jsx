import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledH2,
} from './RegistrationForm.styled';
import { StyledBackground } from 'components/Background/Background.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

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
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledBackground>
        <StyledH2>Registration</StyledH2>
        <StyledLabel>
          <StyledInput type="text" name="name" placeholder="Username" />
        </StyledLabel>
        <StyledLabel>
          <StyledInput type="email" name="email" placeholder="Email" />
        </StyledLabel>
        <StyledLabel>
          <StyledInput type="password" name="password" placeholder="Password" />
        </StyledLabel>
        <button type="submit">Register</button>
      </StyledBackground>
    </StyledForm>
  );
};
