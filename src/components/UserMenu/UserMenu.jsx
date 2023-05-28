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
import LogoutIcon from '@mui/icons-material/Logout';
import { StyledNavLink } from './UserMenu.styled';
// import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUserMenuWrapper>
      <StyledUserWrapper>
        <PersonIcon sx={{ fontSize: 20 }} />
        <StyledUserName>{user.name}</StyledUserName>
      </StyledUserWrapper>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <StyledUserMenuButton
        type="button"
        onClick={() => dispatch(userLogout())}
      >
        Logout
        <LogoutIcon sx={{ fontSize: 20 }} />
      </StyledUserMenuButton>
    </StyledUserMenuWrapper>
  );
};
