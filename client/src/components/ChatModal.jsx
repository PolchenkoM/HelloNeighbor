import { useEffect, useRef, useState } from "react";
import {  SendOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { changeChatModalVisibility } from "../redux/Actions/modalAC";


export default function ChatModal() {
  const socket = useRef();
  const [messages, setMessages] = useState([]);
  const sortMessages = messages.sort((a, b) => a.id - b.id);
  const [value, setValue] = useState("");
  const currentUser = useSelector((state) => state.users.currentUser);
  const sortMessagesRef = useRef(null);
  const dispatch = useDispatch();

  function closeChatModal() {

    dispatch(changeChatModalVisibility());
  }
  function handleKeyPressEsc(e) {
    if (e.keyCode == 27) {
      dispatch(changeChatModalVisibility());
    }
  }

  function connect() {
    socket.current = new WebSocket("ws://localhost:5000");

    socket.current.onopen = () => {
      if (currentUser) {
        const message = {
          event: "connection",
          currentUser,
          id: Date.now(),
        };
        socket.current.send(JSON.stringify(''));
      }
    };

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [message, ...prev]);
    };

    socket.current.onclose = () => {
      console.log("Socket закрыт");
    };

    socket.current.onerror = () => {
      console.log("Socket произошла ошибка");
    };
  }

  useEffect(() => {
    sortMessagesRef.current.scrollTo(0, 9999);
  }, [sortMessages]);

  const handleUserKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      sendMessage();
    }
  };
  const sendMessage = async () => {
    const message = {
      url:`http://localhost:3001/${currentUser.avatar}`,
      currentUser,
      message: value,
      id: Date.now(),
      event: "message",
    };
    socket.current.send(JSON.stringify(message));
    setValue("");
  };

  useEffect(() => {
    if (currentUser) {
      connect();
    }
  }, []);

  function showSmiles() {
    const smiles = document.querySelector(".smiles-container");
    smiles.classList.toggle(".smiles-container--hidden");
  }
  function addFile() {}

  return (
    <>
      <div className="chat-container">
        <div className="chat">
          <button
            className="button closeChatButton"
            onClick={closeChatModal}
            onKeyPress={(e) => handleKeyPressEsc(e)}
          ></button>
          <div className="chat__header">
            <h4 className="chat__title">Чат</h4>
          </div>
          <div ref={sortMessagesRef} className="chat__body">
            <div className="chat__content">
              <div className="chat__message">
                {sortMessages.map((mess) => (
                  <div className="chat__message-person"
                   key={mess.id}>
                    <>
                      <img
                        className="chat__user-avatar"
                        src={mess.url}
                        alt=""
                      />
                      <p className="chat__text">{mess.message}</p>
                    </>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="chat__footer">
            <div className="chat__chatInput-container">
              {/* <PaperClipOutlined
                className="button chat__addFileIcon"
                onClick={addFile}
              /> */}
              <textarea
                onKeyPress={handleUserKeyPress}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="chat__chatInput"
                placeholder="Напишите сообщение..."
              />
              <SendOutlined
                className="button chat__SendOutlined"
                onClick={sendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
