import React, { useEffect, useState } from "react";
import { Modal, Button, Input, Form, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeVisibility } from "../../../redux/Actions/eventAC";
import { Tag } from "antd";

export default function CreateEventModal() {
  const { CheckableTag } = Tag;
  const dispatch = useDispatch();
  const modalVisibility = useSelector((state) => state.events.modalVisibility);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  console.log(tags);

  useEffect(() => {
    fetch("http://localhost:3001/tags")
      .then((res) => res.json())
      .then((result) => setTags(result));
  }, []);

  function handleChange(tag, checked) {

    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags)

  }

  const showModal = () => {
    dispatch(changeVisibility());
  };

  const handleOk = () => {
    dispatch(changeVisibility());
  };

  const handleCancel = () => {
    dispatch(changeVisibility());
  };

  const createEvent = (e) => {
    e.preventDefault();

    dispatch(changeVisibility());
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
          <label htmlFor="">
            Что будем делать?
            <Input placeholder="Введите текст" />
          </label>
          <label htmlFor="">
            Описание
            <Input placeholder="Введите текст" />
          </label>
          <label htmlFor="">
            Время
            <Input placeholder="" type="time" />
          </label>
          <div>
          <label htmlFor="">Выбери тэги</label>

          </div>
          <>
            {tags.map((tag) => (
              <CheckableTag
                key={tag._id}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag.title}
              </CheckableTag>
            ))}
          </>
          <button className="button" onClick={createEvent}>
            Создать ивент
          </button>
        </form>
      </Modal>
    </>
  );
}
