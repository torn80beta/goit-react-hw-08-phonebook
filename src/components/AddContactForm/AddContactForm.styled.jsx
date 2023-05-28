import styled from '@emotion/styled';
import { Field } from 'formik';

export const StyledAddContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StyledLabel = styled.label`
  /* position: relative;
  display: block; */
`;

export const StyledInput = styled(Field)`
  display: block;
  padding: 3px 10px;
  width: 280px;
  height: 30px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;

  &:focus {
    outline: 1px solid greenyellow;
  }
`;

export const StyledErrorName = styled.p`
  position: absolute;
  top: 2px;
  font-size: 15px;
  color: red;
`;

export const StyledErrorNumber = styled.p`
  position: absolute;
  top: 58px;
  font-size: 15px;
  color: red;
`;

export const StyledButton = styled.button`
  display: block;
  /* margin: 0 30px 40px; */
  background-color: white;
  border: 0px solid gray;
  border-radius: 5px;
  padding: 5px 15px;
  height: 25px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover,
  &:focus {
    background-color: azure;
  }

  &:active {
    background-color: rgb(207, 248, 197);
  }
`;
