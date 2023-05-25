import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  StyledUserMenuWrapper,
  StyledUserName,
  StyledUserMenuButton,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUserMenuWrapper>
      <StyledUserName>{user.name}</StyledUserName>
      <StyledUserMenuButton
        type="button"
        onClick={() => dispatch(userLogout())}
      >
        Logout
      </StyledUserMenuButton>
    </StyledUserMenuWrapper>
  );
};
