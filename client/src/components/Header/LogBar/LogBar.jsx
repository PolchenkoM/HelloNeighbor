import React, { useState } from "react";
import useLoginForm from "../../hooks/useLoginForm";
import { Modal, Input } from "antd";

export default function LogBar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loginValues, changeLoginChandler] = useLoginForm();

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
        loginValues,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("user", result.username);
        localStorage.setItem("id", result._id);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
          value={loginValues.email || ""}
          onChange={changeLoginChandler}
          placeholder="Почта"
        />
        <Input
          name="password"
          type="password"
          value={loginValues.password || ""}
          onChange={changeLoginChandler}
          placeholder="Пароль"
        />
      </Modal>
      <a className="log-link" onClick={showModal}>
        Войдите
      </a>
    </>
  );
}
