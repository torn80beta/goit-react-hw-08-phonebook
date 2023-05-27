import styled from '@emotion/styled';

export const StyledButton = styled.button`
  /* margin: 0 30px 40px; */
  background-color: white;
  border: 0px;
  border-radius: 5px;
  padding: 5px 15px;
  height: 25px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    background-color: red;
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
