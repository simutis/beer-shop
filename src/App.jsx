import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import StoreContext from './store/StoreContext';
import './App.css';
import Menu from "./components/menu/Menu";
import Styled from './App.styles';
import ContentPage from "./components/content/ContentContainer";


const App = () => {
  const {
    helloString
  } = useContext(StoreContext);

  return (
    <Styled.AppWrapper>
      <Styled.MobileFrame>
        <Menu />
        <ContentPage />
      </Styled.MobileFrame>
    </Styled.AppWrapper>
  );
};

export default observer(App);
