import React from 'react';
import { observer } from 'mobx-react-lite';
import './App.css';
import Menu from "./components/menu/Menu";
import Styled from './App.styles';
import AllTabsContent from "./components/content/AllTabsContent";


const App = () => {
  return (
    <Styled.AppWrapper>
      <Styled.MobileFrame>
        <Menu />
        <AllTabsContent />
      </Styled.MobileFrame>
    </Styled.AppWrapper>
  );
};

export default observer(App);
