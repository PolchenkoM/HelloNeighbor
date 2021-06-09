import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Modal, Buttonm, Input } from "antd";
import { Tag, Divider } from "antd";

export default function ShowAuthorModal({ setAuthorModal }) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const selectedEvent = useSelector((state) => state.events.selectedEvent);

  const [eventAuthor, setEventAuthor] = useState({});

  const author = selectedEvent.author;
  // console.log('selected event ==>>>', selectedEvent.author);

  useEffect(async () => {
    fetch("http://localhost:3001/eventAuthor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
      }),
    })
      .then((res) => res.json())
      .then((result) => setEventAuthor(result));
  }, []);

  const addFriend = () => {
    const author = selectedEvent.author;
    const me = localStorage.getItem("email");

    fetch("http://localhost:3001/addFriend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        me,
      }),
    });
    setIsModalVisible(false);
    setAuthorModal(false);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    console.log("fromcancel");
    setIsModalVisible(false);
    setAuthorModal(false);
  };

  return (
    <>
      <Modal
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="authorInfo">
          <div className="authorInfo__left">
            <img
              src="https://ca.slack-edge.com/T01R8FD0SSY-U01SUNL50H5-68ddf68520d7-512"
              alt="avatar"
              className="authorInfo__avatar"
            />
          </div>
          <div className="authorInfo__right">
            <div className="authorInfo__mainInfo">
              <span className="authorInfo__name">{eventAuthor.name}</span>
              <div className="rating authorInfo__rating">
                <div className="rating__value">3.6</div>
                <div className="rating__body">★★★★★</div>
              </div>
            </div>
            <div>
              {eventAuthor.tags
                ? eventAuthor.tags.map((tag, ind) => (
                    <Tag key={ind} color="#3b5999">
                      {tag.title}{" "}
                    </Tag>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className="eventInfo">
          <hr />
          <h3 className="eventInfo__title">О себе: </h3>
          <p>{eventAuthor.aboutSelf}</p>
        </div>
        <div className="button-wrapper">
          <button onClick={addFriend} className="goButton">
            Добавить в друзья
          </button>
        </div>
      </Modal>
    </>
  );
}
