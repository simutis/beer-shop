import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Header = styled.div`
  padding-top: 60px;
  background-color: #ca1c00;
  display: flex;
  z-index: -1;
  overflow: hidden;
`;

const MenuTab = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
  z-index: 1;
  font-size: 30px;
`;

const ActiveBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: ${({ activeTab }) => activeTab * 25}%;
  background-color: #353535;
  height: 60px;
  width: 25%;
  border-radius: 10px 10px 0 0;
  z-index: 0;
  transition: all 0.5s ease;
  margin-left: 3px;
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 10px;
    bottom: 0;
    left: -20px;
    border-bottom-right-radius: 10px;
    box-shadow: 10px 0 0 0 #353535;
    z-index: 9;
  }
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 10px;
    bottom: 0;
    right: -20px;
    border-bottom-left-radius: 10px;
    box-shadow: -10px 0 0 0 #353535;
    z-index: 9;
  }
`;

export default {
  Wrapper,
  Header,
  MenuTab,
  ActiveBackground
};
