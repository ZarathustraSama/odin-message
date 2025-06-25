import React from "react";

import Message from "./Message";

function MessageBox ({ messages, selectedUserId }) {

  // Here we filter the messages
  let fMessages = messages.filter(m => (m.recipient_id == selectedUserId) || (m.sender_id == selectedUserId));

  if (fMessages.length > 0) {
    return (fMessages.map(m => <Message key={m.id} message={m.content} />))
  }
  else {
    return <span>You have yet to exchange words with this user!</span>
  }
}

export default MessageBox;