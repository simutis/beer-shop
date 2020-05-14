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
          <i className="fa fa-coffee" aria-hidden="true" />
        </Styled.MenuTab>
        <Styled.MenuTab onClick={() => {
          setActiveTab(1)
        }}>
          <i className="fa fa-cutlery" aria-hidden="true" />
        </Styled.MenuTab>
        <Styled.MenuTab onClick={() => setActiveTab(2)}>
          <i className="fa fa-percent" aria-hidden="true" />
        </Styled.MenuTab>
        <Styled.MenuTab onClick={() => setActiveTab(3)}>
          <i className="fa fa-search" aria-hidden="true" />
        </Styled.MenuTab>
        <Styled.ActiveBackground activeTab={activeTab} />
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default observer(Menu);
