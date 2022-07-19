import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './redux/store';
import { createBrowserHistory } from 'history';

const root = ReactDOM.createRoot(document.getElementById('root'));

let entryProps;
const getEntryProps = () => {
  if (entryProps) {
    return entryProps;
  }

  const storeState = window.__STORE_STATE__ || {},
    history = createBrowserHistory(),
    store = configureStore(storeState);

  return {
    history,
    store
  };
},


  initializeApp = () => {
    entryProps = getEntryProps();
    root.render(
      <React.StrictMode>
        <App {...entryProps} />
      </React.StrictMode>
    );
  }

initializeApp();


