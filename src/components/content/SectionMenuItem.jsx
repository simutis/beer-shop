import Styled from "./TabContent.styles";
import React from "react";

const SectionMenuItem = ({activeSection, name, seqNr, setActiveSection}) => {
  const clickHandler = () => setActiveSection && setActiveSection(seqNr);
  return (
    <Styled.CategoryTitle onClick={clickHandler} active={activeSection === seqNr}>
      {name}
    </Styled.CategoryTitle>
  )
};

export default SectionMenuItem;
