import React from "react";
import { Modal, Input } from "antd";
import Registration from "../../Registration/googleOauth";
import useRegForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { getCurrentUserGoogleThunk } from "../../../redux/Actions/usersAC";
import { useHistory } from "react-router";

export default function Body() {
  function openModalSignUp() {
    console.log("test");
  }
  const dispatch = useDispatch();
  const history = useHistory()

  const [values, changeHandler] = useRegForm();
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    fetch("http://localhost:3001/registration/", {
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
        localStorage.setItem("email", result.email);
        dispatch(getCurrentUserGoogleThunk(result.email));
      });

    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <>
      <div className="body">
        <div className="welcome body__welcome">
          <button className="welcome__button" onClick={showModal}>
            Создать аккаунт
          </button>
          <Modal
            title="Title"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
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
            <p>{modalText}</p>
            <Registration />
          </Modal>
          <h1 className="welcome__title">Найди соседа</h1>
        </div>
      </div>
    </>
  );
}
