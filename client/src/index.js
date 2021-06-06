import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createSagaMiddleware from 'redux-saga'
import 'antd/dist/antd.css'; 
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import initState from './redux/initState';
import rootReducer from './redux/Reducers/rootReducer';
import eventSagaWatcher from './redux/Sagas/eventSaga';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
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


