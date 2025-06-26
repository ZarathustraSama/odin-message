import React from "react";

function Message({ message, otherUserId }) {
  if (message.sender_id == otherUserId) {
    return (
      <span className="message message-other">{message.content}</span>
    )
  }
  else {
    return (
      <span className="message message-self">{message.content}</span>
    )
  }
}

export default Message;