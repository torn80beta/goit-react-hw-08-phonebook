import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  StyledUserMenuWrapper,
  StyledUserName,
  StyledUserMenuButton,
  StyledUserWrapper,
} from './UserMenu.styled';
import PersonIcon from '@mui/icons-material/Person';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUserMenuWrapper>
      <StyledUserWrapper>
        <PersonIcon sx={{ fontSize: 20 }} />
        <StyledUserName>{user.name}</StyledUserName>
      </StyledUserWrapper>
      <StyledUserMenuButton
        type="button"
        onClick={() => dispatch(userLogout())}
      >
        Logout
      </StyledUserMenuButton>
    </StyledUserMenuWrapper>
  );
};
