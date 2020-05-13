import React, { useContext } from 'react';
import Styled from './TabContent.styles';
import {observer} from "mobx-react-lite";
import StoreContext from "../../store/StoreContext";
import FirstTabContent from "./FirstTabContent";
import SecondTabContent from "./SecondTabContent";
import ThirdTabContent from "./ThirdTabContent";
import FourthTabContent from "./FourthTabContent";


const AllTabsContent = () => {
  const {
    activeTab,
    setActiveTab
  } = useContext(StoreContext);

  console.log('----activeTab: ', activeTab);
  return (
      <Styled.AllTabs className="tabs__all" {...{ activeTab }}>
        <FirstTabContent />
        <SecondTabContent />
        <ThirdTabContent />
        <FourthTabContent />
      </Styled.AllTabs>
  );
};

export default observer(AllTabsContent);
