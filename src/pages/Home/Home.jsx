import { StyledHomeContainer, StyledHomeTitle } from './Home.styled';
import { StyledBackground } from 'components/SharedStyles/Background.styled';

export default function Home() {
  return (
    <StyledHomeContainer>
      <StyledBackground>
        <StyledHomeTitle>Contacts book</StyledHomeTitle>
      </StyledBackground>
    </StyledHomeContainer>
  );
}
