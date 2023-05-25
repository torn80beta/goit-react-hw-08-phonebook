import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/operations';
import { StyledBackground } from 'components/SharedStyles/Background.styled';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledH2,
} from 'components/SharedStyles/Form.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      userLogin({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="on">
      <StyledBackground>
        <StyledH2>Log In</StyledH2>
        <StyledLabel>
          <StyledInput type="email" name="email" placeholder="Email" />
        </StyledLabel>
        <StyledLabel>
          <StyledInput type="password" name="password" placeholder="Password" />
        </StyledLabel>
        <StyledButton type="submit">Log In</StyledButton>
      </StyledBackground>
    </StyledForm>
  );
};
