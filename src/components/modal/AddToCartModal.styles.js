import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 10px 0;
`;

const AddToCartButton = styled.button`
  background-color: white;
  color: #343434;
  padding: 10px 30px;
  border-radius: 12px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const BeerPicWrapper = styled.div`
  flex-basis: 100px;
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-top: 40px;
`;

const BeerPic = styled.div`
  background-image: url("${({ picSrc }) => picSrc}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  flex: 1;
  height: 100%;
`;

const BeerInfo = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const BeerTitle = styled.div`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;

const BeerDescr = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  color: lightgray;
  max-height: 80px;
  overflow: hidden;
`;

export default {
  Wrapper,
  AddToCartButton,
  BeerPicWrapper,
  BeerPic,
  BeerInfo,
  BeerTitle,
  BeerDescr
};
