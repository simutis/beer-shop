import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: ${({containerHeight}) => containerHeight ?
  `${containerHeight}px` : '100vh'};
  background-color: #f1f1f9;
`;

const MobileFrame = styled.main`
  width: 100vh;
  height: 100%;
  max-width: 450px;

  background-color: white;
  overflow: hidden;
  position: relative;
`;

export default {
  MobileFrame,
  AppWrapper
};
