import React, {useContext, useEffect} from 'react';
import Styled from './Section.styles';
import StoreContext from "../../store/StoreContext";
import Beer from "../beer/Beer";
import { observer } from 'mobx-react-lite';

const Section = ({ name }) => {
  const store = useContext(StoreContext);

  const {
    activeSection,
    fetchBeers,
  } = store;


  useEffect(() => {
    fetchBeers(name);
  }, []);

  const sectionBeers = store[name] || [];

  return (
    <Styled.Wrapper>
      {sectionBeers.length ? sectionBeers.map(data => <Beer key={data.id} data={data} />) : null}
    </Styled.Wrapper>
  );
};

export default observer(Section);
