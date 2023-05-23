import styled from '@emotion/styled';
import photo_bg from '../../images/photo_bg.jpg';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  /* width: 320px; */
`;

export const StyledH2 = styled.h2``;

export const StyledLabel = styled.label`
  /* display: flex;
  flex-direction: column;
  margin-bottom: 16px; */
  position: relative;
  display: block;
  /* margin-left: 30px; */
`;

export const StyledInput = styled.input``;

export const StyledBackground = styled.div`
  position: relative;
  top: -9px;
  left: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-image: url(${photo_bg});
  background-repeat: no-repeat;
  // backgroundPosition: 'center',
  background-size: cover;
  width: 356px;
  height: 630px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
