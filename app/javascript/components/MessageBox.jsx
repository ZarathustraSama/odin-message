import React from "react";
import { useState, useEffect } from "react";

import Message from "./Message";

function MessageBox () {
  const [messages, setMessages] = useState([]);

  useEffect(() => {

  }, [])

  if (messages.length > 0) {
    return (messages.map(m => <Message key={m.id} message={m} />))
  }
  else {
    return <span>You have yet to exchange words with this user!</span>
  }
}

export default MessageBox;