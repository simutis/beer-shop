import React, { useContext } from 'react';
import Styled from './TabContent.styles';
import {observer} from "mobx-react-lite";
import { Swipeable } from 'react-swipeable'
import SectionMenuItem from './SectionMenuItem';

const ThirdTabContent = () => {
  return (
    <Styled.TabWrapper>
      <Styled.SectionWrapper className="section__wrapper">
        <Styled.Header className="section__header">
         <SectionMenuItem name="Discount" seqNr={0} />
        </Styled.Header>
        <Swipeable>
         <h1>DISCOUNTS...</h1>
        </Swipeable>
      </Styled.SectionWrapper>
    </Styled.TabWrapper>
  );
};

export default observer(ThirdTabContent);
