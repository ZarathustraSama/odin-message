import React from "react";
import { useState, useEffect } from "react";

import MessageBox from "./MessageBox";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";

function Chatbox() {
  const buttonValue = "Send";
  const lastSelectedUser = "";

  const [messages, setMessages] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  // First we fetch the current user id
  useEffect(() => {
    const url = "/api/v1/users/show";
    fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Id response was not ok.")
    })
    .then((res) => setCurrentUserId(res.id))
    .catch((error) => console.log(error))
  }, [])

  // Then we fetch the list of users except the current one
  useEffect(() => {
    const url = "/api/v1/users/index";
    fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Users response was not ok.");
    })
    .then((res) => setUsers(res))
    .catch((error) => console.log(error))
  }, [])

  // Lastly we fetch the messages sent up until now between them
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
  }

  return (
    <>
      <main className="chatbox">
        <MessageBox messages={messages} />
        <form action="">
          <Select value={lastSelectedUser} options={users} setOption={setUsers} />
          <Input value={message} setValue={setMessage} />
          <Button value={buttonValue} onClick={handleClick} />
        </form>
      </main>
    </>
  )
}

export default Chatbox;