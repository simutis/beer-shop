import React, {useContext} from 'react';
import Styled from './Beer.styles';
import StoreContext from "../../store/StoreContext";

const Beer = ({data}) => {
  const {name, image_url, abv} = data;

  const {
    setShowModal,
    setActiveBeer,
  } = useContext(StoreContext);

  const handleClick = () => {
    setActiveBeer(data);
    setShowModal(true);
  }

  return (
    <Styled.Wrapper onClick={handleClick}>
      <Styled.PicWrapper>
        <Styled.Picture src={image_url} alt="beer pic" />
      </Styled.PicWrapper>
      <Styled.DescRow>{name}</Styled.DescRow>
      <Styled.DescRow>{abv}</Styled.DescRow>
    </Styled.Wrapper>
  );
};

export default Beer;
