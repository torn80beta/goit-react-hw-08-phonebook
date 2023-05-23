import {
  StyledMobileWrapper,
  StyledPhone,
  StyledPhoneMirror,
  StyledTopWrapper,
  StyledCamera,
  StyledLine,
} from './MobileWrapper.styled';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

export const MobileWrapper = () => {
  return (
    <StyledMobileWrapper>
      <StyledPhone>
        <StyledPhoneMirror>
          <StyledTopWrapper>
            <StyledCamera></StyledCamera>
            <StyledLine></StyledLine>
          </StyledTopWrapper>
          {/* <Suspense fallback={null}>
          <Outlet />
          </Suspense> */}
        </StyledPhoneMirror>
      </StyledPhone>
    </StyledMobileWrapper>
  );
};
