import React, {useContext, useEffect} from 'react';
import Styled from './Section.styles';
import StoreContext from "../../store/StoreContext";
import Beer from "../beer/Beer";
import { observer } from 'mobx-react-lite';
import VisibilitySensor from 'react-visibility-sensor';

const Section = ({ name }) => {
  const store = useContext(StoreContext);

  const {
    activeSection,
    fetchBeers,
    pagesFetch,
  } = store;


  useEffect(() => {
    fetchBeers({ section: name, page: 1 });
  }, []);

  const sectionBeers = store[`${name}Beers`] || {};
  const beersIds = Object.keys(sectionBeers);

  const pagesFetched = store.pagesFetched[name];

  const fetchNextpage = (isVisible) => {
    if(isVisible) {
      fetchBeers({
        section: name,
        page: pagesFetched + 1
      })
    }
  }

  return (
    <Styled.SectionContainer className="section__container" ac>
      {beersIds.map((id, idx) => {
        const data = sectionBeers[id];
        const isLast = beersIds.length === idx + 1;

        const Component = () => <Beer data={data}/>;

        return isLast ?
          <VisibilitySensor key={`visib-wrap-${name}-${id}`} onChange={fetchNextpage}>
            <Component />
          </VisibilitySensor> :
          <Component key={`beer-${name}-${id}`} />
      })}
    </Styled.SectionContainer>
  );
};

export default observer(Section);
