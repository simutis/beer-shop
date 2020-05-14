import React, {useContext} from 'react';
import Styled from './Cart.styles';
import {observer} from "mobx-react-lite";
import StoreContext from "../../store/StoreContext";
import {toJS} from 'mobx';
import {Swipeable} from "react-swipeable";

const CartBeer = observer(({beer, isFirst}) => {
  const {
    cartItems,
    allBeers,
    setQuantity,
    deleteCartItem,
    setCartHeight
  } = useContext(StoreContext);

  const handleQuantity = type => () => {
    const {id, quantity} = beer;
    if (type === 'plus') {
      setQuantity(id, quantity ? quantity + 1 : 1);
    } else {
      setQuantity(id, quantity && quantity > 1 ? quantity - 1 : 0);
    }
  }

  const nrOfCartItems = Object.keys(cartItems).length;

  return (
    <Styled.BeerContainer isFirst={isFirst}>
      <Styled.PicWrapper>
        <Styled.Picture picSrc={beer.image_url} alt="beer pic"/>
      </Styled.PicWrapper>

      <Styled.BeerInfo>
        {beer.name}
      </Styled.BeerInfo>
      <Styled.QuantityContainer>
        <Styled.QuantityButton type="minus" onClick={handleQuantity('minus')}>
          -
        </Styled.QuantityButton>
        {beer.quantity || 0}
        <Styled.QuantityButton type="plus" onClick={handleQuantity('plus')}>
          +
        </Styled.QuantityButton>
      </Styled.QuantityContainer>
      <Styled.DeleteButton onClick={() => {
        deleteCartItem(beer.id);
        if (nrOfCartItems === 1) {
          setCartHeight(1);
        }
      }}>
        <i className="fa fa-trash-o" />
      </Styled.DeleteButton>
    </Styled.BeerContainer>
  );
})

const Cart = () => {
  const {
    cartItems,
    allBeers,
    setCartHeight,
    cartHeight,
    basketTotal
  } = useContext(StoreContext);

  const cartNotEmpty = Object.keys(cartItems).length;

  const handleSwipe = event => {
    event.dir === 'Up' && setCartHeight(3);
    event.dir === 'Down' && setCartHeight(cartNotEmpty ? 2 : 1);
  }
  const cartItemsIds = Object.keys(cartItems);

  return (
    <Swipeable onSwiped={handleSwipe} trackMouse={true}>
      <Styled.Wrapper className="noselect" cartHeight={cartHeight}>
        <Styled.Header>
          <Styled.DashClickWrapper onClick={() => setCartHeight(cartHeight === 3 ? cartNotEmpty ? 2 : 1 : 3 )}>
            <Styled.Dash />
          </Styled.DashClickWrapper>
          <div>
            <i className="fa fa-shopping-bag" />
            <span>Shopping Cart</span>
          </div>
        </Styled.Header>
        <Styled.CartContent>
          {cartItemsIds.length ?
            <CartBeer key={cartItemsIds[0]} isFirst={true} beer={cartItems[cartItemsIds[0]]}/> : null
          }
          <Styled.CartItems>
            {cartItemsIds.map((id,idx) => idx !== 0 ?
              <CartBeer key={id} beer={cartItems[id]} /> : null)
            }
          </Styled.CartItems>
          <Styled.PricingContainer>
            <Styled.TotalPrice>
              <span>Total</span>
              <span>£{basketTotal}</span>
            </Styled.TotalPrice>
            <Styled.TotalButton>
              Confirm Payment
            </Styled.TotalButton>
          </Styled.PricingContainer>
        </Styled.CartContent>
      </Styled.Wrapper>
    </Swipeable>
  );
};

export default observer(Cart);
