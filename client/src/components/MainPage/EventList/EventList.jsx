import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { getEventSaga, modalMatchVisibility } from "../../../redux/Actions/eventAC";
import { getSelectedEvent } from "../../../redux/Actions/eventAC";

const EventList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventSaga());
  }, []);

	const [tags, setTags] = useState([])


  useEffect(() => {
		fetch("http://localhost:3001/tags")
			.then((res) => res.json())
			.then((result) => setTags(result))
	}, [])

  const events = useSelector((state) => state.events.circleEvents);
  const allEvents = useSelector((state) => state.events.allEvents);
  // const num = allEvents.length - events.length;
  
  const psedoAll = allEvents.map(el => el._id)
  const psedoEv = events?.map(el => el._id)
  const arr = psedoAll.filter(el => !psedoEv.includes(el))
  const newArr = allEvents.filter(el => arr.includes(el._id))

  const selectEvent = (el) => {
    console.log('el==>>', el);
    dispatch(modalMatchVisibility());
    dispatch(getSelectedEvent(el));
  };

  return (
    <div className="container--eventList">
      <p className="eventList__item">EVENT LIST </p>
      <ul>
        {events.length
          ? events.map((el, ind) => (
              <>
                {el.title && (
                  <li>
                    <Button onClick={() => selectEvent(el)}>{el.title}</Button>{" "}
                    <br />
                    <br />
                  </li>
                )}
              </>
            ))
          : "Эвентов вблизи нет"}
      </ul>
      <hr />
      <ul>
        {newArr.length &&
          newArr.map((el, ind) => (
            <>
              {el.title && (
                <li>
                  <Button>{el.title}</Button> <br />
                  <br />
                </li>
              )}
            </>
          ))}
      </ul>
    </div>
  );
};

export default EventList;
