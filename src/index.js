import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/mainStore';
import StoreContext from './store/StoreContext';

const Main = () => (
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
