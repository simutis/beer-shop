import React, {useContext, useEffect} from 'react';
import Styled from './ContentContainer.styles';
import {observer} from "mobx-react-lite";
import StoreContext from "../../store/StoreContext";
import Section from "../section/Section";



const ContentContainer = ({query}) => {
  const {
    activeTab,
    setActiveTab,
  } = useContext(StoreContext);

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.CategoryTitle>
          ALL
        </Styled.CategoryTitle>
        <Styled.CategoryTitle>
          PIZZA
        </Styled.CategoryTitle>
        <Styled.CategoryTitle>
          STEAK
        </Styled.CategoryTitle>
      </Styled.Header>
      <Styled.Content>
        <Section name="all" />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default observer(ContentContainer);
