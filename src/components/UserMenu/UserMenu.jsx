import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { StyledUserMenuWrapper } from './UserMenu.styled';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUserMenuWrapper>
      {/* // <div className={css.wrapper}> */}
      {/* <p className={css.username}>{user.name}</p> */}
      <p>{user.name}</p>
      <button type="button" onClick={() => dispatch(userLogout())}>
        Logout
      </button>
    </StyledUserMenuWrapper>
  );
};
