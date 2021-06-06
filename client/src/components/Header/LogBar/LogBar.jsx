import React, { useState } from "react";
import { Modal, Input } from "antd";
import useRegForm from "../../hooks/useForm";


export default function LogBar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [values, changeHandler] = useRegForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
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
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    changeHandler('')
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          name="email"
          type="email"
          value={values.email || ""}
          onChange={changeHandler}
          placeholder="Почта"
        />
        <Input
          name="password"
          type="password"
          value={values.password || ""}
          onChange={changeHandler}
          placeholder="Пароль"
        />
      </Modal>
      <a className="log-link" onClick={showModal}>
        Войдите
      </a>
    </>
  );
}
