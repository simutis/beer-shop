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
        <Styled.MenuTab onClick={() => setActiveTab(1)}>
          Coffee
        </Styled.MenuTab>
        <Styled.MenuTab onClick={() => {
          setActiveTab(2)
        }}>
          Meal
        </Styled.MenuTab>
        <Styled.MenuTab onClick={() => setActiveTab(3)}>
          Discount
        </Styled.MenuTab>
        <Styled.MenuTab onClick={() => setActiveTab(4)}>
          Search
        </Styled.MenuTab>
        <Styled.ActiveBackground activeTab={activeTab}>
          {activeTab !== 1 ? <Styled.BlackCorner direction="left"/> : null}
          {activeTab !== 4 ? <Styled.BlackCorner direction="right"/> : null}
        </Styled.ActiveBackground>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default observer(Menu);
