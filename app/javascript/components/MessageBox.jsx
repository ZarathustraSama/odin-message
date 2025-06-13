import React from "react";

import Message from "./Message";

function MessageBox ({ messages }) {
  if (messages) {
    return (messages.map(m => <Message key={m.id} message={m} />))
  }
}

export default MessageBox;