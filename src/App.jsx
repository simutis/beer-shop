import React, {useRef, useLayoutEffect, useContext} from 'react';
import { observer } from 'mobx-react-lite';
import './App.css';
import Menu from "./components/menu/Menu";
import Styled from './App.styles';
import AllTabsContent from "./components/content/AllTabsContent";
import Cart from "./components/cart/Cart";
import StoreContext from "./store/StoreContext";


const App = () => {
  const {
    containerHeight,
    setContainerHeight,
  } = useContext(StoreContext);

  useLayoutEffect(() => setContainerHeight(
    window.innerHeight
  ), []);

  return (
    <Styled.AppWrapper containerHeight={containerHeight}>
      <Styled.MobileFrame containerHeight={containerHeight}>
        <Menu />
        <AllTabsContent />
        <Cart />
      </Styled.MobileFrame>
    </Styled.AppWrapper>
  );
};

export default observer(App);
