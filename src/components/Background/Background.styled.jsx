import styled from '@emotion/styled';
import photo_bg from '../../images/photo_bg.jpg';

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
