import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BS1 from './BS1';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import allReducer from './reducers/allReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';




const store = createStore(allReducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BS1 />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
