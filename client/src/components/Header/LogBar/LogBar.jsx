import React, { useState } from "react";
import { Modal, Input, Button } from "antd";
import useRegForm from "../../hooks/useForm";

export default function LogBar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [values, changeHandler] = useRegForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setIsModalVisible(false);
    fetch("http://localhost:3001/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("id", result._id);
      })
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Войдите в аккаунт"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form method="POST" onSubmit={handleOk}>
          <label htmlFor="">
            Почта
            <Input
              name="email"
              type="email"
              value={values.email || ""}
              onChange={changeHandler}
              placeholder="Введите текст"
            />
          </label>
          <label htmlFor="">
            Пароль
            <Input
              name="password"
              type="password"
              value={values.password || ""}
              onChange={changeHandler}
              placeholder="Введите текст"
            />
          </label>
          <button className="button">Войти</button>
        </form>
      </Modal>
    </>
  );
}
