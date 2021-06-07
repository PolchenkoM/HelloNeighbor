import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import 'antd/dist/antd.css'; 
import App from './App';
import initState from './redux/initState';
import rootReducer from './redux/Reducers/rootReducer';
import eventSagaWatcher from './redux/Sagas/eventSaga';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);

sagaMiddleware.run(eventSagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


