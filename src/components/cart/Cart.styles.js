import styled from 'styled-components';

const cartHeightMap = {
  1: 42,
  2: 105,
  3: 650
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  height: ${({ cartHeight }) => cartHeightMap[cartHeight]}px;
  background-color: #24252c;
  width: 100%;
  color: white;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  padding: 0px 15px 15px;
  transition: all 0.5s ease;
  align-items: center;
  z-index: 9;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #969696;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  i {
    display: inline-block;
    margin-right: 6px;
    font-size: 12px;
    position: relative;
    top: -2px;
  }
`;

const BeerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ isFirst }) => (isFirst ? '20' : '5')}px;
  width: 100%;
  ${({ isFirst }) => (isFirst ? 'margin-bottom: 20px;' : '')}
`;

const Picture = styled.div`
  background-image: url("${({ picSrc }) => picSrc}");
  height: 40px;
  width: 15px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: white;
`;

const PicWrapper = styled.div`
  background-color: white;
  padding: 5px 1px;
`;

const BeerInfo = styled.div`
  width: 35%;
`;

const QuantityContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

const QuantityButton = styled.button`
  border: 1px solid gray;
  border-radius: ${({ type }) =>
    type === 'plus' ? '0 6px 6px 0' : '6px 0 0 6px'};
  background-color: ${({ type }) => (type === 'plus' ? '#EFC400' : '')};
  width: 25px;
  font-weight: bold;
`;

const DeleteButton = styled.div`
  color: red;
  cursor: pointer;
  font-size: 18px;
  margin-right: 10px;
`;

const Dash = styled.span`
  display: inline-block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  background-color: #969696;
`;

const DashClickWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 2px;
`;

const TotalButton = styled.button`
  background-color: #efc400;
  width: 100%
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
  border-radius: 15px;
  color: black;
  margin-bottom: 20px;
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  width: 100%;
`;

const CartItems = styled.div`
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  overflow-y: auto;
`;

const PricingContainer = styled.div`
  padding: 30px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default {
  Wrapper,
  Header,
  BeerContainer,
  Picture,
  PicWrapper,
  BeerInfo,
  QuantityContainer,
  QuantityButton,
  DeleteButton,
  Dash,
  DashClickWrapper,
  TotalButton,
  CartContent,
  TotalPrice,
  CartItems,
  PricingContainer
};
