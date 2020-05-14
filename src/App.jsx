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

  const containerRef = useRef(null);

  useLayoutEffect(() => setContainerHeight(
    containerRef.current.clientHeight
  ), []);

  return (
    <Styled.AppWrapper ref={containerRef} containerHeight={containerHeight}>
      <Styled.MobileFrame >
        <Menu />
        <AllTabsContent />
        <Cart />
      </Styled.MobileFrame>
    </Styled.AppWrapper>
  );
};

export default observer(App);
