import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import Styled from './Menu.styles';
import StoreContext from "../../store/StoreContext";


const Menu = () => {
  const {
    activeTab,
    setActiveTab
  } = useContext(StoreContext);

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.MenuTab onClick={() => setActiveTab(0)}>
          Coffee
        </Styled.MenuTab>
        <Styled.MenuTab onClick={() => {
          setActiveTab(1)
        }}>
          Meal
        </Styled.MenuTab>
        <Styled.MenuTab onClick={() => setActiveTab(2)}>
          Discount
        </Styled.MenuTab>
        <Styled.MenuTab onClick={() => setActiveTab(3)}>
          Search
        </Styled.MenuTab>
        <Styled.ActiveBackground activeTab={activeTab} />
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default observer(Menu);
