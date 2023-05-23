import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { StyledRegisterSection } from './Register.styled';
// import { Background } from 'components/Background/Background';

export default function Register() {
  return (
    <StyledRegisterSection>
      {/* <Background> */}
      <RegistrationForm></RegistrationForm>
      {/* </Background> */}
    </StyledRegisterSection>
  );
}
