import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f9;
`;

const MobileFrame = styled.main`
  width: 465px;
  max-height: 768px;
  height: 100%;
  background-color: white;
  overflow: hidden;
  position: relative;
`;

export default {
  MobileFrame,
  AppWrapper
};
