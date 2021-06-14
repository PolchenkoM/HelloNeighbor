import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import {
  getEventSaga,
  modalMatchVisibility,
} from "../../../redux/Actions/eventAC";
import { getSelectedEvent } from "../../../redux/Actions/eventAC";

const EventList = () => {
  const dispatch = useDispatch();

  const selectedEvent = useSelector((state) => state.events.selectedEvent);

  const author = selectedEvent?.authorId;
  const [eventAuthor, setEventAuthor] = useState({});

  useEffect(() => {
    dispatch(getEventSaga());
  }, []);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tags")
      .then((res) => res.json())
      .then((result) => setTags(result));
  }, []);

  const events = useSelector((state) => state.events.allEvents);
  const allEvents = useSelector((state) => state.events.allEvents);

  const psedoAll = allEvents.map((el) => el._id);
  const psedoEv = events?.map((el) => el._id);
  const arr = psedoAll.filter((el) => !psedoEv.includes(el));
  const newArr = allEvents.filter((el) => arr.includes(el._id));

  const selectEvent = (el) => {
    console.log("events from eventList=++", events?.authorId);
    dispatch(modalMatchVisibility());
    dispatch(getSelectedEvent(el));
  };

  return (
    <div className="container--eventList">
      <div className="eventList">
        <h2 className="eventList__title"></h2>
        <ul className="eventList__list">
          {events.length
            ? events.map((el, ind) => (
                <>
                  {el.title && (
                    <li className="eventList__item" onClick={() => selectEvent(el)}>
                        {el.title}
                    </li>
                  )}
                </>
              ))
            : <li className="eventList__title-empty">Эвентов вблизи нет</li>}
        </ul>
        <ul>
          {newArr.length &&
            newArr.map((el, ind) => (
              <>
                {el.title && (
                  <li>
                    <button className="button">{el.title}</button>
                  </li>
                )}
              </>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default EventList;
