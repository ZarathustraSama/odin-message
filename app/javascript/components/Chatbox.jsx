import React from "react";
import { useState, useEffect } from "react";

import MessageBox from "./MessageBox";
import InputBox from "./InputBox";
import Button from "./Button";

function Chatbox() {
  const userLabel = "User";
  const messageLabel = "Message";
  const buttonLabel = "Send";
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <>
      <main>
        <MessageBox />
        <InputBox label={userLabel} onChange={setUser} />
        <InputBox label={messageLabel} onChange={setMessage}/>
        <Button label={buttonLabel} onClick={handleClick} />
      </main>
    </>
  )
}

export default Chatbox;