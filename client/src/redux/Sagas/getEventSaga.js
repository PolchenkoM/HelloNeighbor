import { call, put , takeLatest } from "redux-saga/effects";
import {  GET_EVENT_SAGA } from "../Types/eventTypes";
import {  getEvent } from "../Actions/eventAC";


const fetchGetEvent = () => {
  return fetch("http://localhost:3001/event")
    .then((res) => res.json())
    
};

function* getSagaWorker() {
  const getFromServer = yield call(fetchGetEvent,);
  yield put(getEvent(getFromServer));
}

function* getSagaWatcher() {
  yield takeLatest(GET_EVENT_SAGA, getSagaWorker);
}

export default getSagaWatcher;
