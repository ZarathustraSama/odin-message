import React from "react";

import MessageBox from "./MessageBox";
import InputBox from "./InputBox";
import Button from "./Button";

function Chatbox() {
  let messages = []
  const userLabel = "User";
  const messageLabel = "Message";
  const buttonLabel = "Send";

  return (
    <>
      <main>
        <MessageBox messages={messages}/>
        <InputBox label={userLabel} onChange={onUserChange} />
        <InputBox label={messageLabel} onChange={onMessageChange}/>
        <Button label={buttonLabel} />
      </main>
    </>
  )
}

export default Chatbox;