import { call, put, takeEvery, takeLatest, throttle } from "redux-saga/effects";
import { ADD_EVENT_SAGA, GET_EVENT_SAGA } from "../Types/eventTypes";
import { addEvent, getEvent } from "../Actions/eventAC";


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
