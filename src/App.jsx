import React from 'react';
import { observer } from 'mobx-react-lite';
import './App.css';
import Menu from "./components/menu/Menu";
import Styled from './App.styles';
import AllTabsContent from "./components/content/AllTabsContent";
import Cart from "./components/cart/Cart";


const App = () => {
  return (
    <Styled.AppWrapper>
      <Styled.MobileFrame>
        <Menu />
        <AllTabsContent />
        <Cart />
      </Styled.MobileFrame>
    </Styled.AppWrapper>
  );
};

export default observer(App);
