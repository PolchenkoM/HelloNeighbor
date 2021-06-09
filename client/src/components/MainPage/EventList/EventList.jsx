import ChatModal from "../ChatModal/ChatModal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Input, Form, Radio } from "antd";


const EventList = () => {
  const events = useSelector((state) => state.events.allEvents);

  return (
    <div className="container--eventList">
      <p className="eventList__item">EVENT LIST </p>
      <ul>
        {events.length &&
          events.map((el, ind) => (
            <>
            {el.title &&
            <li>
              <Button>{el.title}</Button> <br/><br/>
            </li>
          }
          </>
          ))}
      </ul>
      <ChatModal />
    </div>
  );
};

export default EventList;
