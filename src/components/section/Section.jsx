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

  const sectionBeers = store[`${name}Beers`] || [];
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
      {sectionBeers.length ? sectionBeers.map((data, idx) => {
        const isLast = sectionBeers.length === idx + 1;
        const Component = () => <Beer data={data}/>;

        return isLast ?
          <VisibilitySensor key={`visib-wrap-${name}-${data.id}`} onChange={fetchNextpage}>
            <Component />
          </VisibilitySensor> :
          <Component key={`beer-${name}-${data.id}`} />
      }) : null}
    </Styled.SectionContainer>
  );
};

export default observer(Section);
