import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DevTools from 'mobx-react-devtools';
import store from './store/mainStore';
import StoreContext from './store/StoreContext';

const __DEV = process.env.NODE_ENV === 'development';

const Main = () => (
  <StoreContext.Provider value={store}>
    {__DEV && <DevTools />}
    <App />
  </StoreContext.Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
