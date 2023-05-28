import styled from '@emotion/styled';
import Modal from 'react-modal';
Modal.setAppElement('#modal-root');

export const StyledButton = styled.button`
  background-color: #cddadd;
  border: 0px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 7px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    background-color: #f1bf90;
  }

  &:active {
    background-color: rgb(207, 248, 197);
  }
`;

export const StyledContactsListUL = styled.ul`
  margin: 20px 15px;
`;

export const StyledContactListItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  max-width: 500px;
  height: 40px;
  margin-bottom: 5px;
  color: #fff;
  border-bottom: 1px solid white;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const StyledModal = styled(Modal)`
  position: absolute;
  top: 199px;
  left: 343px;
  width: 356px;
  height: 540px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
