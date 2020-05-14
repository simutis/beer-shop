import React, {useContext} from 'react';
import Styled from './AddToCartModal.styles';
import Modal from "./Modal";
import StoreContext from "../../store/StoreContext";

const AddToCartModal = () => {
  const {
    setShowModal,
    addCartItem,
    activeBeer,
    setCartHeight
  } = useContext(StoreContext);

  if(!activeBeer) return null;

  return (
    <Modal onClose={() => setShowModal(false)}>
      <Styled.Wrapper>
        <Styled.BeerInfo>
          <Styled.BeerTitle>{activeBeer.name}</Styled.BeerTitle>
          <Styled.BeerDescr>{activeBeer.description}</Styled.BeerDescr>
          <Styled.BeerDescr>{activeBeer.food_pairing}</Styled.BeerDescr>

        </Styled.BeerInfo>
        <Styled.BeerPicWrapper className="pic-wrapper">
          <Styled.BeerPic picSrc={activeBeer.image_url} />
        </Styled.BeerPicWrapper>
      </Styled.Wrapper>
      <Styled.AddToCartButton onClick={() => {
        addCartItem(activeBeer);
        setShowModal(false);
        setCartHeight(2);
      }}>
        ADD TO CART
      </Styled.AddToCartButton>
    </Modal>
  );
};

export default AddToCartModal;
