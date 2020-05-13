import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import StoreContext from './store/StoreContext';


const App = () => {
  const {
    helloString
  } = useContext(StoreContext);

  return (
    <div className="App">
      <h1>{helloString}</h1>
    </div>
  );
};

export default observer(App);
