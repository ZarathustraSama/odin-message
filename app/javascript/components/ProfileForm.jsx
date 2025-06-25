import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "./Input";
import Button from "./Button";


function ProfileForm() {
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    const url = "api/v1/profile/create";
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const body = {nickname, birthday, bio};

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
        navigate("/profile");
      }
      throw new Error("Profile response was not ok.");
    })
    .catch((err) => console.log(err));
  }

  function handleEnterKey(e){
    if (e.key == "Enter") {
      handleSubmit(e);
    }
  }

  return(
    <form action="">
      <Input idName={"nickname"} value={nickname} setValue={setNickname} handleEnterKey={handleEnterKey} />
      <Input idName={"birthday"} type={"date"} value={birthday} setValue={setBirthday} handleEnterKey={handleEnterKey} />
      <Input idName={"bio"} type={"textfield"} value={bio} setValue={setBio} handleEnterKey={handleEnterKey} />
      <Button value={"Create Profile"} onClick={handleSubmit} />
    </form>
  )
}

export default ProfileForm;