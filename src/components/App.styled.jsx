import styled from '@emotion/styled';

export const StyledAppWrapper = styled.section`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 360px;
  max-height: 740px;
  /* margin: 0 auto; */
  /* border: 1px solid black;
  border-radius: 20px; */
  /* overflow: hidden; */
  /* background-color: green; */
`;

/* Mobile */

export const StyledMobileWrapper = styled.div`
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPhone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 740px;
  background: #232526;
  /* background: #1a1a58; */
  border-radius: 40px;
  padding: 10px 15px;
`;

export const StyledPhoneMirror = styled.div`
  /* position: relative; */
  width: 356px;
  height: 700px;
  /* background-color: rgb(26, 25, 25); */
  background-color: white;
  border-radius: 30px;
`;

export const StyledTopWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 30px;
  left: 50%;
  transform: translateX(-50%);
  float: left;
  background-color: #2e2e2e;
  border-radius: 0px 0px 45px 45px;
`;

export const StyledCamera = styled.div`
  position: relative;
  float: left;
  margin-right: 8px;
  left: 30%;
  width: 11px;
  height: 11px;
  top: 1px;
  background-color: rgb(83, 83, 82);
  border-radius: 30px;
  border: 1px solid rgb(214, 214, 214);
`;

export const StyledLine = styled.div`
  position: relative;
  width: 60px;
  height: 6px;
  margin: 0px auto 0 auto;
  float: left;
  left: 30%;
  top: 4px;
  background-color: rgb(83, 83, 82);
  border-radius: 5px;
  border: 1px solid rgb(214, 214, 214);
`;
