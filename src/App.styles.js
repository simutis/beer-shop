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
  max-width: 465px;
  max-height: 768px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  background-color: white;
`;

export default {
  MobileFrame,
  AppWrapper
};
