import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_EVENT_SAGA } from "../Types/eventTypes";
import { addEvent } from "../Actions/eventAC";


const fetchEvent = ({payload}) => {
  return fetch("http://localhost:3001/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      x:payload.x,
      y:payload.y
    }),
  })
    .then((res) => res.json())
};

function* eventSagaWorker( payload ) {
  const eventFromServer = yield call(fetchEvent, payload);
  yield put(addEvent(eventFromServer));
}

function* eventSagaWatcher() {
  yield takeLatest(ADD_EVENT_SAGA, eventSagaWorker);
}

export default eventSagaWatcher;
