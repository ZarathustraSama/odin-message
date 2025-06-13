import React from "react";

function Message({ message }) {
  return (
    <>
      <span className="message">{ message.user }: { message.content }</span>
    </>
  )
}

export default Message;