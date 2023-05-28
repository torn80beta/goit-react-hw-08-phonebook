import styled from '@emotion/styled';

export const StyledUserMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 0 10px;
`;

export const StyledUserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const StyledUserName = styled.p`
  display: inline-block;
  text-decoration: none;
  padding: 12px 0px;
  font-weight: 700;
  color: #2a363b;
`;

export const StyledUserMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  color: #2a363b;
  &:hover,
  &:focus {
    color: #ef8e47;
  }

  &:active {
    background-color: #ff6c00;
  }
`;
