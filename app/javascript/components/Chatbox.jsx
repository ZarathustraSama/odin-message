import React from "react";
import { useState, useEffect } from "react";

import MessageBox from "./MessageBox";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";

function Chatbox() {
  const buttonValue = "Send";
  let update = false;

  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [message, setMessage] = useState("");


  // First we fetch the list of users except the current one
  useEffect(() => {
    const url = "/api/v1/users/index";
    fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Users response was not ok.");
    })
    .then((res) => {
      setUsers(res);
      setSelectedUserId(res[0].id);
    })
    .catch((err) => console.log(err))
  }, [update]);

  // Then we fetch the messages sent up until now between them
  useEffect(() => {
    const url = "/api/v1/messages/index";
    fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Messages response was not ok.");
    })
    .then((res) => setMessages(res))
    .catch((error) => console.log(error))
  }, [])

  function handleClick(e) {
    e.preventDefault();

    const url = "api/v1/messages/create";
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const body = {selectedUserId, message};

    if (!!selectedUserId || message.length == 0) 
      return;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": token,
      },
      body: JSON.stringify(body)
    })
    .then((res) => {
      if (res.ok) {
        update = true;
      }
      throw new Error("Message response was not ok.");
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      <main className="chatbox">
        <MessageBox messages={messages} />
        <form action="">
          <Select value={selectedUserId} options={users} setOption={setUsers} />
          <Input value={message} setValue={setMessage} />
          <Button value={buttonValue} onClick={handleClick} />
        </form>
      </main>
    </>
  )
}

export default Chatbox;