import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  /* width: 320px; */
`;

export const StyledH2 = styled.h2`
  margin-bottom: 50px;
`;

export const StyledLabel = styled.label`
  /* display: flex;
  flex-direction: column;
  margin-bottom: 16px; */
  position: relative;
  display: block;
  /* margin-left: 30px; */
`;

export const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  /* margin: 10px 0px 40px; */
  padding: 3px 10px;
  width: 300px;
  height: 40px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;

  &:focus {
    outline: 2px solid gray;
  }
`;

export const StyledSubmitButton = styled.button`
  /* alignItems: 'center', */
  /* justifyContent: 'center', */
  min-width: 300px;
  height: 40px;
  color: white;
  border: none;
  background-color: #ff6c00;
  border-radius: 100px;
  margin-top: 33px;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ef8e47;
  }

  &:active {
    background-color: #ff6c00;
  }
`;

export const StyledError = styled.p`
  color: #7c0c0c;
`;
