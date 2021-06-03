import React, { useState } from "react";
var socket = new WebSocket("ws://localhost:8080");

function ChatList() {
  // document.forms.publish.onsubmit = function () {
  //   var outgoingMessage = this.message.value;

  //   socket.send(outgoingMessage);
  //   return false;
  // };

  // обработчик входящих сообщений
  socket.onmessage = function (event) {
    const incomingMessage = event.data;
    // showMessage(incomingMessage);
    console.log(incomingMessage);
  };

  const [server, setServer] = useState("");

  // показать сообщение в div#subscribe
  // function showMessage(message) {
  //   var messageElem = document.createElement("div");
  //   messageElem.appendChild(document.createTextNode(message));
  //   document.getElementById("subscribe").appendChild(messageElem);
  // }
  const [input, setInput] = useState("");
  const [div, setDiv] = useState("");
  console.log(div);

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    setDiv((prev) => [...prev, input]);
    socket.send(input);
  };

  return (
    <>
      <div>
        <form onSubmit={addHandler} action="">
          <button>add</button>
          <input onChange={changeInput} type="text" value={input} />
        </form>
      </div>
      <ul>
        <li>{div}</li>
      </ul>
    </>
  );
}

export default ChatList;
