import React, { useContext } from 'react';
import Styled from './TabContent.styles';
import {observer} from "mobx-react-lite";
import StoreContext from "../../store/StoreContext";
import FirstTabContent from "./FirstTabContent";
import SecondTabContent from "./SecondTabContent";
import ThirdTabContent from "./ThirdTabContent";
import FourthTabContent from "./FourthTabContent";
import AddToCartModal from "../modal/AddToCartModal";


const AllTabsContent = () => {
  const {
    activeTab,
    showModal
  } = useContext(StoreContext);

  return (
      <Styled.AllTabs className="tabs__all" {...{ activeTab }}>
        <FirstTabContent />
        <SecondTabContent />
        <ThirdTabContent />
        <FourthTabContent />
        {showModal ? <AddToCartModal/> : null}
      </Styled.AllTabs>
  );
};

export default observer(AllTabsContent);
