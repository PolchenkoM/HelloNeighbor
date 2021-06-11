import { notification } from 'antd';
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import ShowAuthorModal from "./ShowAuthorModal";
import { useDispatch, useSelector } from "react-redux";
import { Tag } from "antd";

import { modalMatchVisibility } from "../../../redux/Actions/eventAC";

export default function ShowEventModal() {
  const dispatch = useDispatch();
  
  const key = 'updatable';
  const modalMatchVisibilit = useSelector(
    (state) => state.events.modalMatchVisibility
  );

  const selectedEvent = useSelector((state) => state.events.selectedEvent);

  const author = selectedEvent?.author;
  const [eventAuthor, setEventAuthor] = useState({});

  


  const handleOk = () => {
    notification.open({
      key,
      message: 'Секундочку...',
      description: 'Отправляем запрос',
    });
    setTimeout(() => {
      notification.open({
        key,
        message: 'Успешно!',
        description: 'Вы присоединились к встрече',
      });
    }, 1500);

    const author = localStorage.getItem("email");
    const id = selectedEvent._id;
    fetch("http://localhost:3001/matchEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        id,
      }),
    });
    dispatch(modalMatchVisibility());
  };

  const handleCancel = () => {
    dispatch(modalMatchVisibility());
  };

  const [authorModal, setAuthorModal] = useState(false);
  console.log("from event show==>", eventAuthor);

  function authorShow() {
    return authorModal ? setAuthorModal(false) : setAuthorModal(true);
  }

  return (
    <>
      <Modal
        footer={null}
        visible={modalMatchVisibilit}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {authorModal ? <ShowAuthorModal setAuthorModal={setAuthorModal} /> : ""}

        <div className="authorInfo">
          <div className="authorInfo__left">
            <img
              src={`http://localhost:3001/${author?.avatar}`}
              alt="avatar"
              className="authorInfo__avatar"
              onClick={authorShow}
            />
          </div>

          <div className="authorInfo__right">
            <div className="authorInfo__mainInfo">
              <span className="authorInfo__name">{selectedEvent.author}</span>
              <div className="rating authorInfo__rating">
                <div className="rating__value">{selectedEvent.rating}</div>
                <div className="rating__body"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="eventInfo">
          <hr />
          <h3 className="eventInfo__title">{selectedEvent.title}</h3>
          <p className="eventInfo__description">{selectedEvent.description}</p>
        </div>

        <div className="tags-list">
          {selectedEvent.tags
            ? selectedEvent.tags.map((tag, ind) => (
                <Tag color="#55acee" className="tag-list__tag" key={ind}>
                  {tag.title}
                </Tag>
              ))
            : null}
        </div>
        <div className="button-wrapper">
          <button
            onClick={handleOk}
            id={selectedEvent._id}
            className="goButton"
          >
            Go!
          </button>
        </div>
      </Modal>
    </>
  );
}
