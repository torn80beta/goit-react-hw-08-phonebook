import styled from '@emotion/styled';
import photo_bg from '../../images/photo_bg.jpg';

export const StyledBackground = styled.div`
  position: relative;
  top: -9px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-image: url(${photo_bg});
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: cover;
  min-width: 357px;
  min-height: 640px;
  overflow: hidden;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
