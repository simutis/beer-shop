import React, { useContext } from 'react';
import Styled from './TabContent.styles';
import {observer} from "mobx-react-lite";
import StoreContext from "../../store/StoreContext";
import Section from "../section/Section";
import { Swipeable } from 'react-swipeable'
import SectionMenuItem from './SectionMenuItem';


const FirstTabContent = ({query}) => {
  const {
    activeSection,
    setActiveSection
  } = useContext(StoreContext);

  const handleSwipe = event => {
    event.dir === 'Left' && activeSection !== 2 && setActiveSection(activeSection + 1);
    event.dir === 'Right' && activeSection !== 0 && setActiveSection(activeSection - 1);
  }

  return (
    <Styled.TabWrapper>
      <Styled.SectionWrapper className="section__wrapper">
        <Styled.Header className="section__header">
          <SectionMenuItem {...{activeSection, setActiveSection}} name="ALL" seqNr={0} />
          <SectionMenuItem {...{activeSection, setActiveSection}} name="PIZZA" seqNr={1} />
          <SectionMenuItem {...{activeSection, setActiveSection}} name="STEAK" seqNr={2} />
        </Styled.Header>
        <Swipeable onSwiped={handleSwipe} trackMouse={true}>
          <Styled.AllSections className="sections__all" {...{ activeSection }}>
            <Section name="all" />
            <Section name="pizza" />
            <Section name="steak" />
          </Styled.AllSections>
        </Swipeable>
      </Styled.SectionWrapper>
    </Styled.TabWrapper>
  );
};

export default observer(FirstTabContent);
