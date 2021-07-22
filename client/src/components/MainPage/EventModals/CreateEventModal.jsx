import React, { useEffect, useState } from "react";
import { Modal, Button, Input, Form, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addEvent,
  changeVisibility,
  getEventSaga,
} from "../../../redux/Actions/eventAC";
import { Tag } from "antd";
import useForm from "../../hooks/useForm";
import { getCurrentUserGoogleThunk } from "../../../redux/Actions/usersAC";

export default function CreateEventModal() {
  const { CheckableTag } = Tag;
  const dispatch = useDispatch();
  const modalVisibility = useSelector((state) => state.events.modalVisibility);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [values, changeHandler, setValues] = useForm();
  const event = useSelector((state) => state.events.allEvents);

  useEffect(() => {
    fetch("http://localhost:3001/tags")
      .then((res) => res.json())
      .then((result) => setTags(result));
  }, []);

  function handleChange(tag, checked) {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  }

  const handleOk = () => {
    dispatch(changeVisibility());
  };

  const handleCancel = () => {
    const eventId = event[event.length - 1];
    fetch("http://localhost:3001/delEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId,
      }),
    }).then((res) => res.json);
    dispatch(getEventSaga());
    dispatch(changeVisibility());
  };

  const createEvent = (e) => {
    e.preventDefault();
    const author = localStorage.getItem("email");
    const eventId = event[event.length - 1];
    fetch("http://localhost:3001/createEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values,
        author,
        selectedTags,
        eventId,
      }),
    })
      .then((res) => res.json())
      .then((result) => dispatch(addEvent(result)));

    dispatch(changeVisibility());
    dispatch(getCurrentUserGoogleThunk(author))
    setValues("");
  };

  const [form] = Form.useForm();

  return (
    <>
      <Modal
        title="Создание ивента"
        visible={modalVisibility}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form action="">
          <label htmlFor="" className="createModal__label">
            Что будем делать?
            <Input
              placeholder="Введите текст"
              name="title"
              type="text"
              className="createModal__input"
              value={values.title || ""}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="" className="createModal__label">
            Описание
            <Input
              placeholder="Введите текст"
              name="description"
              type="text"
              value={values.description || ""}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="" className="createModal__label">
            Время
            <Input
              placeholder=""
              type="time"
              name="eventTime"
              value={values.eventTime || ""}
              onChange={changeHandler}
            />
          </label>
          <div className="createModal__tags" style={{marginTop: '10px'}}>
            <label htmlFor="" className="dark-text createModal__label">Выберите тэги:</label>
          </div>
          <>
            {tags.map((tag) => (
              <CheckableTag
              className="tags_event-tag"
                key={tag._id}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag.title}
              </CheckableTag>
            ))}
          </>
          <button className="button createEventButton" onClick={createEvent}>
            Создать ивент
          </button>
        </form>
      </Modal>
    </>
  );
}
