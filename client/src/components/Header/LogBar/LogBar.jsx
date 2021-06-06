import React, { useState } from "react";
import useLoginForm from "../../hooks/useLoginForm";
import { Modal, Input, Button } from "antd";

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
			<Button type='primary' onClick={showModal}>
				Open Modal
			</Button>
			<Modal
				title='Войдите в аккаунт'
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<form action="">
          <label htmlFor="">
          Почта<Input placeholder="Введите текст"/>
          </label>
          <label htmlFor="">
          Пароль<Input placeholder="Введите текст"/>
          </label>
          <button className="button">Войти</button>
        </form>
			</Modal>
		</>
  );
}
