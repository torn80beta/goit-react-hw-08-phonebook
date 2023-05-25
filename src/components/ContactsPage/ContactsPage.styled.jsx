import styled from '@emotion/styled';

export const StyledContactsWrapper = styled.div`
  width: 99%;
  height: 150px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
